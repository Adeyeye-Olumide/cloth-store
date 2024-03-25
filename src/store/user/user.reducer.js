
const initial_state = {
    currentUser:null
}

export const userReducer = (state = initial_state, action)=>{
    const {type, payload} = action

    switch (type) {
        case "setActiveUser":
            return {
                ...state, currentUser:payload
            }
    
        default:
            return state
        
    }

}
