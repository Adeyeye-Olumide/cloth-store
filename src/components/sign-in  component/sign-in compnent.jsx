import {signInFirebase, createUserDocumentFromAuth} from '../../utils/firestore-utils/firestore'
function signIn(){
    async function tester (){
        try {
            const {user} = await signInFirebase()
            createUserDocumentFromAuth(user)
            
        } catch (error) {
            console.error(error)
        }
        
    }


    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={tester}>Click Me</button>
        </div>
    
    )
}
export default signIn