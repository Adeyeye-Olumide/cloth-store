// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS5ROXQsg8OnYc1ikv3Y6WPOpIic6CjsI",
  authDomain: "cloth-store-798ce.firebaseapp.com",
  projectId: "cloth-store-798ce",
  storageBucket: "cloth-store-798ce.appspot.com",
  messagingSenderId: "902135357896",
  appId: "1:902135357896:web:6402cdde3b7fcad6e760fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export function signInFirebase(){
    return signInWithPopup(auth, provider)
}
export const db = getFirestore()
export async function createUserDocumentFromAuth(userAuth) {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } 
        catch (error) {
            console.log(error.message)
        }

        return userDocRef
    }


}
