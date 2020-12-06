import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDQICvQngoFqgaW85kAk2POemluPnNeGVA",
    authDomain: "smart-a0dd3.firebaseapp.com",
    projectId: "smart-a0dd3",
    storageBucket: "smart-a0dd3.appspot.com",
    messagingSenderId: "769116195753",
    appId: "1:769116195753:web:e3deacc35b2e8f5cf712b8",
    measurementId: "G-DXDB0KSRY1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  const  provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
