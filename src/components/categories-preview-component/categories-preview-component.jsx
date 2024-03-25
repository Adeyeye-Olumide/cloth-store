import { useContext, useEffect } from "react"

import { Fragment } from "react"

import { ProductContext } from '../../contexts/products'

import { CategoriesPreviewContext } from "../../contexts/categories-preview-context"
import PreviewCategory from "../preview-categories-component/preview-categories-component"


import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { setCategory } from "../../store/categories/categories.action"
import { setSelectedCategory } from "../../store/categories-preview/categories-preview.action"

import { AddToCart } from "../../store/cart/addToCart"
import { getCollectionAndDocuments } from "../../utils/firestore-utils/firestore"

import Spinner from "../spinner-component/spinner-component"
import './file.css'

function CategoriesPreview(){
    
    const category = useSelector((state)=>state.categories.category)
    const {categoriesTitle, selectedCategory} = useSelector((state)=> state.categoriesPreview)
    const isLoad = useSelector((state)=> state.categories.isLoading)
    console.log(isLoad)
    const dispatch = useDispatch()

    // useEffect(()=>{

    //    dispatch( setSelectedCategory(category[categoriesTitle]))




    // },[categoriesTitle])


    

  
    console.log(selectedCategory, categoriesTitle)


    let productArray = [...Object.values(category).flat()]


    const {setCurrentProduct, currentProduct} = useContext(ProductContext)
    
    
    const addToCart  = AddToCart()


    function cartHandler(e){
    
      let filteredProduct = productArray.filter(product=> product.name == e.target.closest('.product').id)
      
      addToCart(filteredProduct[0])
      setCurrentProduct(filteredProduct[0])
      
    }

   
    return (

        <>
           { 
            Object.keys(category).map(title=> {

                return(
                    <Fragment key={title}>
                        <PreviewCategory 
                        key={title} title={title} category={category} onClick={cartHandler}></PreviewCategory>

                            
                    </Fragment>
                    
                    
                )
                    
                
            })

        }

           

    
            
        </>

        
    )
}

export default CategoriesPreview