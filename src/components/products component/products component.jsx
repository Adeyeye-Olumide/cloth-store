import { Routes, Route } from "react-router"
import CategoriesPreview from "../categories-preview-component/categories-preview-component"
import PreviewCategory from "../preview-categories-component/preview-categories-component"
import FullCategory from "../full-categories-component/full-categories"

import Spinner from "../spinner-component/spinner-component"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchCategoryAsync } from "../../store/categories/categories.action"




function Shop(){

  const isLoad = useSelector((state)=> state.categories.isLoading)

  const dispatch = useDispatch()


  
  useEffect(()=>{
      
    dispatch(fetchCategoryAsync())
  },[])
   
   
   
    return (
      <Routes>
        <Route index element={isLoad?<Spinner></Spinner>:<CategoriesPreview></CategoriesPreview>}></Route>
        <Route path='category' element={isLoad?<Spinner></Spinner>:<FullCategory></FullCategory>}></Route>
      </Routes>
     
    )
}

export default Shop
  