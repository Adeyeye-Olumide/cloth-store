
const initial_state = {
    category:{},
    isLoading:false,
    error:null
}

export const categoriesReducer = (state = initial_state, action)=>{
    const {type, payload} = action

    switch (type) {
        case 'fetchCategoryStart':
            return {...state, isLoading:true}
        
        case 'fetchCategorySuccess':
            return {...state, isLoading:false, category: payload}
    
        case 'fetchCategoryError':
            return {...state, isLoading:false, error: payload}
        
        default:
            return state
    }
}
