


const initial_state = {
    categoriesTitle:'',
    selectedCategory:[]
}

export const categoriesPreviewReducer = (state = initial_state, action)=>{

    const {type, payload} = action

    switch (type) {
        case "setCategoriesTitle":
            return {...state, categoriesTitle: payload}

        case "setSelectedCategory":
            return {...state, selectedCategory: payload}
        
        default:
            return state
    }
}