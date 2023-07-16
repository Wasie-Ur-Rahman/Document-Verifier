import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDm0kVOI8cwJSg1SRfoTmwdA5vhZB6-_Ac",
  authDomain: "verifile-31cdc.firebaseapp.com",
  projectId: "verifile-31cdc",
  storageBucket: "verifile-31cdc.appspot.com",
  messagingSenderId: "881322295710",
  appId: "1:881322295710:web:fabbff04beeb7dc456968f"
};
   

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    console.log('Firebase app initialized')
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase };