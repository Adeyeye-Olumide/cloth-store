export const addProduct = (cartItem, productToAdd)=>{
    const existingItem = cartItem?.find(item=> item.id === productToAdd.id)


    if (existingItem){
        return cartItem.map(item=> item.id === productToAdd.id? 
            {...item, quantity:item.quantity+1}:item)
    }

   
    return([...cartItem, {...productToAdd, quantity:1}])
}