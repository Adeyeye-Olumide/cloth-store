import { createContext, useState, useEffect, useContext } from "react";


import { getCollectionAndDocuments } from "../utils/firestore-utils/firestore";
import { CartContext } from "./cart";
import { ProductContext } from "./products";

export const CategoryContext = createContext({
    category:{}
    
})

export const CategoryContextProvider = ({children})=>{
    const [category, setCategory] = useState({})
    const [cartHandler, setHandler] = useState(null)
    const {addToCart} = useContext(CartContext)
    const {setCurrentProduct} = useContext(ProductContext)

  

    useEffect(()=>{
        async function getData(){
            setCategory(await getCollectionAndDocuments())
        }

        getData()

       

    }, [])


   
    

    const value = {category}




    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>

}
