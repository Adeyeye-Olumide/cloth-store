import './file.css'
import { CartContext } from '../../contexts/cart'
import { Fragment, useContext, useEffect } from 'react'
import { setCartItem, setCartTotal } from '../../store/cart/cart.action'
import { useSelector, useDispatch } from 'react-redux'

import { setSpinnerAction, timer } from '../../store/spinner/spinner.action'

import Spinner from '../spinner-component/spinner-component'


function CheckOutPage(){

    let headers = [{id:1, title:"Product"}, {id:2, title:"Description"}, {id:3, title:"Quantity"},
    {id:4, title:"Price"}, {id:5, title:"Remove"}]

    const cartItem = useSelector((state)=>state.cart.cartItem)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)

    const isSpinning = useSelector((state)=> state.spinner.isSpinning)

    const dispatch = useDispatch()
   


    

   

    useEffect(()=>{
        console.log('checkout page loaded')
         const element = document.querySelector(".checkoutpage-container")
        
            function changeQuantity(e){
            const targetID = +e.target.closest('.checkout-item')?.id
            
            
            const productExists = cartItem.find(item=> {
                // if(!item) return
                return item.id=== targetID
            })
    
            if(productExists){
                let rightArrow = 'right-arrow'
                let leftArrow = 'left-arrow'


                if (e.target.classList.contains(rightArrow) || 
                e.target.classList.contains(leftArrow) || e.target.classList.contains('remove')) 
            
                dispatch(setCartItem(cartItem.map(item=> {
                    // if(!item) return
                    if (item.id===targetID){

                        if (e.target.classList.contains('remove')) return null
                        
                        return {...item, quantity: e.target.classList.contains(rightArrow) 
                            && item.quantity+1 || item.quantity==1 && item.quantity
                            || e.target.classList.contains(leftArrow) &&item.quantity-1}
                    }

                    return item
                }).filter(item=> item?item:'')))

                    
            }

            
    
    
        }
        element.addEventListener("click", changeQuantity)

        return () => {
            element.removeEventListener("click", changeQuantity)
          }
    },[cartItem])




    useEffect(()=>{

        const newTotal = [...cartItem].reduce((acc, item)=> {
            return acc + item.quantity * item.price
        }, 0)
  
        dispatch(setCartTotal(newTotal))
      }, [cartItem])


  


    
   


    return (
        <Fragment>
        {
            
            <div className='main'>
            <div className="checkoutpage-container">
        
                <div className='checkoutpage-header'>
                    {headers.map(({id, title})=> {
                        return <div key={id}><h3 className='title'>{title}</h3></div>
                    })}
                </div>
                
    


                {cartItem.map((item)=> {
                    // if (!item) return
                    const {id, quantity, name, imageUrl, price} = item
                    return (

                        <div key={id} className='checkout-item' id={id}>
                            <div className='image-container'>
                                <img src={imageUrl} alt="" />
                            </div>
                            
                            <div className='name'>
                                <h3>{name}</h3>
                            </div>

                            <div className='others'>
                                <span className='left-arrow'>&#171;</span>
                                <span className='quantity'>{quantity}</span>
                                <span className='right-arrow'>&#187;</span>
                            </div>

                            <div className='price'>
                                <span>{price}</span>
                            </div>

                            <div className='remove-div'>
                                <span className='remove'>&times;</span>
                            </div>
            
                
    

                        </div>
                    )
                })}
                <div className='total'><h2>Total: ${cartTotal}</h2></div>
            </div>
        </div>
        
        }
        
        </Fragment>  
    )
}
   


export default CheckOutPage