import { signInWithGooglePop , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        //const response = await signInWithGooglePop();
        //destructuring above as we need user object
        // console.log(response);
        //createUserDocumentFromAuth(response.user);
        const {user} = await signInWithGooglePop();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return (
        <div>
           <h1> This is sign in page</h1>
           <button onClick={logGoogleUser}>Sign in with Google pop up</button>
        </div>
    )
};



export default SignIn;

