import { createContext, useState } from "react";




export const ProductContext = createContext({
    setCurrentProduct: ()=>null,
    currentProduct: null
})


export const ProductProvider = ({children})=>{
    const [currentProduct, setCurrentProduct] = useState(null)
    const value = {currentProduct, setCurrentProduct}

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}