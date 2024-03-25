import { useSelector, useDispatch } from "react-redux";
import { setCartItem } from "./cart.action";
import { addProduct } from "./cart.addProduct";
import { useEffect } from "react";
import { createSelector } from 'reselect'

const cartReducer = (state)=>state.cart

const cartSelector = createSelector(
    [cartReducer], (cart)=>{

        return cart.cartItem
    }
)




export function AddToCart(){
    const cartItem = useSelector(cartSelector)
    console.log(cartItem)
    const dispatch = useDispatch()

    return function (productToAdd){
            
        const newCartItem = addProduct(cartItem, productToAdd)

        dispatch(setCartItem(newCartItem))
    }



    


    

}

