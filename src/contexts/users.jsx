import { createContext } from "react";
import { useState, useEffect, useReducer } from "react";
import { onAuthListener, signOutUser } from "../utils/firestore-utils/firestore";

export const UserContext = createContext({
    setCurrentUser:()=> null,
    currentUser: null

})

const initial_state = {
    currentUser:null
}

const userReducer = (state, action)=>{
    const {type, payload} = action

    switch (type) {
        case "setActiveUser":
            return {
                ...state, currentUser:payload
            }
    
        default:
            throw new Error("There is an action unaccounted for")
    }

}

export const UserProvider = ({children})=>{
    // const [currentUser, setCurrentUser] = useState(null)

    const [{currentUser}, dispatch] = useReducer(userReducer, initial_state)

    const setCurrentUser = (user)=>{
        dispatch({type:"setActiveUser", payload:user})

    }

    const value = {currentUser, setCurrentUser}

    

    

    useEffect(()=>{

        signOutUser()

        const unsubscribe = onAuthListener((user)=>{
           setCurrentUser(user)
           console.log(user)
        })

        return unsubscribe



    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}