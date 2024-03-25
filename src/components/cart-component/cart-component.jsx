import ButtonComponent from "../button-component/button-component"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { ProductContext } from "../../contexts/products"
import { CartContext } from "../../contexts/cart"
import { useSelector } from "react-redux"

import CartItem from "../cart-item-component/cart-item"
import './file.css'



function Cart(){
  
    
    const {currentProduct} = useContext(ProductContext)
    const [cartState, setCurrentCartState] = useState(null)

    const cartItem = useSelector((state)=> state.cart.cartItem)
    const currentCartClassName = useSelector((state)=> state.cart.currentCartClassName)

    console.log(currentCartClassName)


    const navigate = useNavigate()

    function goToCheckOut(){
        navigate("checkout")
    }

    
    
 
    return <div>
        
        <div className={`cart-container ${currentCartClassName}`}>
            <div className="aa">
                {cartItem.map((item)=> <CartItem key={item.id} item ={item}></CartItem>)}

            </div>

            <div >
                <ButtonComponent buttonType="plain" text="CHECKOUT" onClick={goToCheckOut}></ButtonComponent>
            </div>
            


        
        </div>
    </div>
}

export default Cart