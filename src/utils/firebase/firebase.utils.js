// / Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider
} 
from 'firebase/auth';

import {
   getFirestore,
   doc,
   getDoc,
   setDoc 
} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxmckGqfbTSSV5SnORKnTcL6XrdXdREwk",
  authDomain: "crwn-clothing-db-871ad.firebaseapp.com",
  projectId: "crwn-clothing-db-871ad",
  storageBucket: "crwn-clothing-db-871ad.appspot.com",
  messagingSenderId: "338080209521",
  appId: "1:338080209521:web:be551c78cea0e7161159d0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    prompt:"select_account"

});

export const auth = getAuth();
export const signInWithGooglePop = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc (db,'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc (userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {

        const {displayName , email} = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(
                userDocRef, {displayName,email,createdAt}
            );
        } catch(error){
            console.log("error while creating the user",error.message);
        }
        
    }

return userDocRef;

}