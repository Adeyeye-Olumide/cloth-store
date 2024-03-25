
const initial_state = {
    currentCartClassName: 'active',
    cartItem:[],
    cartTotal:0
}

export function cartReducer(state = initial_state, action){
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