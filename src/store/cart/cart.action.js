

export const setCartClassName = (className)=>{
    return {type: 'setCartClassName', payload:className}
}

export const setCartItem = (newCartItem)=>{
    return {type: 'setCartItem', payload: newCartItem}
}



export const setCartTotal = (total)=> {
    return {type: 'setCartTotal', payload: total}
}