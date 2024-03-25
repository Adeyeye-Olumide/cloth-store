import { createContext, useState, useEffect, useReducer ,useContext } from "react";
import { ProductContext } from "./products";



const addProduct = (cartItem, productToAdd)=>{
    const existingItem = cartItem.find(item=> item.id === productToAdd.id)


    if (existingItem){
        return cartItem.map(item=> item.id === productToAdd.id? 
            {...item, quantity:item.quantity+1}:item)
    }

   
    return([...cartItem, {...productToAdd, quantity:1}])

   

  
    

}
export const CartContext = createContext({
    setCartClassName:()=>null,
    currentCartClassName: null,
    cartItem:[],
    addToCart:()=>{},
    cartTotal:0
})

const initial_state = {
    currentCartClassName: 'active',
    cartItem:[],
    cartTotal:0
}

function cartReducer(state, action){
    const {type, payload} = action

    switch (type) {
        case "setCartClassName":
            return {...state, currentCartClassName:payload}

        case "setCartItem":
            return {...state, cartItem:payload}

        case "setCartTotal":
            return {...state, cartTotal:payload}
    
        default:
            return state
    }
}
export const CartProvider = ({children})=> {
    // const [currentCartClassName, setCartClassName] = useState("active")
    // const [cartItem, setCartItem] = useState([])
    // const [cartTotal, setCartTotal] = useState(0)

    const [{cartItem, cartTotal, currentCartClassName}, dispatch] = useReducer(cartReducer, initial_state)

    const setCartClassName = (className)=>{
        dispatch({type: 'setCartClassName', payload:className})
    }

    const setCartItem = (newCartItem)=>{
        dispatch({type: 'setCartItem', payload: newCartItem})
    }

    const addToCart = (productToAdd)=> {
        
        const newCartItem = addProduct(cartItem, productToAdd)

        setCartItem(newCartItem)
    }

    const setCartTotal = (total)=> {
        dispatch({type: 'setCartTotal', payload: total})
    }


    const {setCurrentProduct, currentProduct} = useContext(ProductContext)

    

    useEffect(()=>{

        const newTotal = [...cartItem].reduce((acc, item)=> {
            return acc + item.quantity * item.price
        }, 0)

        setCartTotal(newTotal)
    }, [cartItem])

    const value = {currentCartClassName, setCartClassName, addToCart, cartItem, setCartItem, setCartTotal, cartTotal}

   
 

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}