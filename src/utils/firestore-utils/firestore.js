// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCredential,
    signOut, 
    onAuthStateChanged
 } from 'firebase/auth'

import {doc, 
    getDoc, 
    setDoc, 
    getFirestore, 
    deleteDoc, 
    collection, 
    writeBatch, 
    getDocs, 
    query} from 'firebase/firestore'
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

export async function genericSignInFirebase(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}
export const db = getFirestore()
export async function createUserDocumentFromAuth(userAuth, added) {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...added
            })
        } 
        catch (error) {
            console.log(error.message)
        }

        return userDocRef
    }


}



export async function createUserUsingEmailAndPassword(email, password){
    if (!email || !password) return
    return createUserWithEmailAndPassword(auth, email, password)
}

export async function signOutUser(){
    return signOut(auth)
}

export function onAuthListener(callback){
    return onAuthStateChanged(auth, callback)
}


export async function addCollectionAndDocuments(collectionKey, productsToUpload){
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    productsToUpload.forEach(product => {
        const docRef = doc(collectionRef, product.title.toLowerCase())
        batch.set(docRef, product)
        
    })


    await batch.commit()
    console.log("done")

}

export async function getCollectionAndDocuments(){
    const collectionRef = collection(db, 'categories')

    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)

    const categoryMap = querySnapShot.docs.reduce((acc, snapshot)=>{
        const {title, items} = snapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}