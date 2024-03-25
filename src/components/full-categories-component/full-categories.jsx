import { Fragment, useContext } from "react"

import { ProductContext } from '../../contexts/products'

import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector"

import { AddToCart } from "../../store/cart/addToCart"

import ButtonComponent from "../button-component/button-component"
import './file.css'
import { useEffect, useState } from "react"

function FullCategory(){
    

    // const{ 
    //     categoriesPreview: {categoriesTitle, selectedCategory },
    //     categories: {category}
    //     } = useSelector((state)=> state)

    
    const {categoriesTitle, selectedCategory} = useSelector((state)=> state.categoriesPreview)
    const {category} = useSelector((state)=> state.categories)

   
   

    console.log(selectedCategory)
    let productArray = [...Object.values(category).flat()]

    // useEffect(()=> {

       
    //     setProductArray(productArray)

    // },[category])

    
    const {setCurrentProduct, currentProduct} = useContext(ProductContext)

   
    
    const addToCart  = AddToCart()

    
    function cartHandler(e){
    
        let filteredProduct = productArray.filter(product=> product.name == e.target.closest('.product').id)
        addToCart(filteredProduct[0])
        setCurrentProduct(filteredProduct[0])
        
    }
    
    

    return (
        <Fragment key={categoriesTitle}>
          
                        
            <h2 className="product-title">{categoriesTitle}</h2>
            <div className="full-container" key={categoriesTitle}>
                {selectedCategory && selectedCategory.map(({imageUrl, id, name, price}, i)=>{



                    return (
                        <div key={id} className='product' id={name}>
                            <img src={imageUrl} alt="" height='270px'/>

            
    
                            <div className='details'>
                                <span className='name'><h6>{name}</h6></span>
                                <span className='price'><h6>{price}</h6></span>

    
                            </div>

                            
                            <ButtonComponent buttonType="plain" text='ADD TO CART' 
                            onClick={cartHandler}></ButtonComponent>
    
            
        
                        </div>

                    )


                })}
                
                

            </div>
        </Fragment>
    )
}

export default FullCategory