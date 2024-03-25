
import SignIn from '../form component/sign-in form'
import SignUp from '../form component/sign-up form'
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/users'
import {
    signInFirebase, 
    createUserDocumentFromAuth, 
    createUserUsingEmailAndPassword, 
    genericSignInFirebase} from '../../utils/firestore-utils/firestore'


   

function Authentication(){
    let formData, form, formElement
  

   
    async function googleSignIn (){
        try {
            const {user} = await signInFirebase()
            console.log(user)
            
            
            createUserDocumentFromAuth(user)
           

            formElement.reset()

            
            
            
        } catch (error) {
            console.error(error)
        }
        
    }

    async function genericSignIn(e){
        e.preventDefault()
        try {
           const {email, password} = formData
           const {user} = await genericSignInFirebase(email, password)
           console.log(user)
          
           createUserDocumentFromAuth(user)

           formElement.reset()
           
          
        } 
        catch (error) {
            console.log(error.message)
        }
    }

    async function onSubmit(e){
        e.preventDefault()
        try {
            const {email, password, confirmPassword, displayName} = formData
            if(password != confirmPassword){
                alert("passwords dont match")
                throw new Error("password and confirm password does not match")

            } 
            const {user} = await createUserUsingEmailAndPassword(email, password)
            createUserDocumentFromAuth(user,{ displayName })
            

            formElement.reset()
            
            
            
           
        } 
        catch (error) {
            console.log(error)
        }
        
    }

    function handler(e){
        e.preventDefault()
        const className = e.target.closest('form').className
        formElement = document.querySelector(`.${className}`)
        form = new FormData(formElement)
        
        formData = Object.fromEntries(form)

        console.log(formData)
    }


    return (
        <div className="form-container">
            <SignIn onChange={handler} onSubmit={genericSignIn} onClick={googleSignIn}></SignIn>

            <SignUp onSubmit = {onSubmit} onChange = {handler}></SignUp>
        </div>
    
    )
}
export default Authentication