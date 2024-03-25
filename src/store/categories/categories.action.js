import { getCollectionAndDocuments } from "../../utils/firestore-utils/firestore"



export const fetchCategoryStart = ()=>{
    return {type: 'fetchCategoryStart'}

}

export const fetchCategorySuccess = (category)=>{
    return { type: 'fetchCategorySuccess', payload: category}
}


export const fetchCategoryError = (error)=> {
    return { type: 'fetchCategoryError', payload: error}
}

export const fetchCategoryAsync = ()=> async(dispatch)=>{

    dispatch(fetchCategoryStart())

    try {
        
        const category = await getCollectionAndDocuments()
        dispatch(fetchCategorySuccess(category))
    } 
    catch (error) {
        dispatch(fetchCategoryError())
    }
}