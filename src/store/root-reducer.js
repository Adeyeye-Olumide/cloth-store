import { combineReducers } from 'redux'


import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'
import { categoriesReducer } from './categories/categories.reducer'
import { categoriesPreviewReducer } from './categories-preview/categories-preview.reducer'
import { spinnerReducer } from './spinner/spinner.reducer'


export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    categoriesPreview: categoriesPreviewReducer,
    spinner: spinnerReducer
    
    

})