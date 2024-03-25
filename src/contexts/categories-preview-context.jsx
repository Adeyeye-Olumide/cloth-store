import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CategoryContext } from "./categories-context";


export const CategoriesPreviewContext = createContext({
    categoriesTitle:'',
    setCategoriesTitle:()=>'',
    selectedCategory:[]


})


export const CategoriesPreviewProvider = ({children})=>{

    const [categoriesTitle, setCategoriesTitle] = useState('')
    const [selectedCategory, setSelectedCategory] = useState([])
    const category = useSelector((state)=> state.categories.category)
    

    useEffect(()=>{
        setSelectedCategory(category[categoriesTitle])

       



    },[categoriesTitle])

    console.log(categoriesTitle)

    const value = {categoriesTitle, setCategoriesTitle, selectedCategory}

    return <CategoriesPreviewContext.Provider value={value}>{children}</CategoriesPreviewContext.Provider>

}

