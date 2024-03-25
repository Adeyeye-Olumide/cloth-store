import { Fragment, useContext } from "react"
import { CategoriesPreviewContext } from "../../contexts/categories-preview-context"
import { useParams, useNavigate} from "react-router-dom"
import { setCategoriesTitle } from "../../store/categories-preview/categories-preview.action"
import { setSelectedCategory } from "../../store/categories-preview/categories-preview.action"


import ButtonComponent from "../button-component/button-component"

import './file.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function PreviewCategory(props){
    const {title, category, onClick} = props
    const dispatch = useDispatch()

    
    const navigate = useNavigate()

    
    const {categoriesTitle, selectedCategory} = useSelector((state)=> state.categoriesPreview)
    
    



    function switchOver(e){
        

        const productName = e.target.closest(".see-more").id
        console.log(productName)
        

        dispatch(setCategoriesTitle(productName))

        dispatch(setSelectedCategory(category[productName]))

        

        navigate("category")

       

    }


    useEffect(()=> {


        console.log(selectedCategory)
    }, [categoriesTitle])

    return (
        <Fragment key={title}>
          
                        
            <h2 className="product-title">{title}</h2>
            <div className="preview-container" key={title}>
                {category[title] && category[title].map(({imageUrl, id, name, price}, i)=>{
                    if (i>4) return


                    return (
                        <div key={id} className='product' id={name}>
                            <img src={imageUrl} alt="" height='270px'/>
            
    
                            <div className='details'>
                                <span className='name'><h6>{name}</h6></span>
                                <span className='price'><h6>{price}</h6></span>

    
                            </div>

                            <ButtonComponent buttonType="plain" text='ADD TO CART' onClick={
                                    onClick}></ButtonComponent>
    
            
        
                        </div>

                    )


                })}
                
                

            </div>
            <div className="see-more" id={title}>
                
                <ButtonComponent text="See More..." buttonType="plain" onClick={switchOver}></ButtonComponent>
               
                
            </div>
        </Fragment>
    )
}

export default PreviewCategory