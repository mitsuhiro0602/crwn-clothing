import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDV1bC5qNZsY6qgmbb7QMFSzYxRqPdea0U",
  authDomain: "crwn-db-8aeda.firebaseapp.com",
  projectId: "crwn-db-8aeda",
  storageBucket: "crwn-db-8aeda.appspot.com",
  messagingSenderId: "497315821893",
  appId: "1:497315821893:web:2cb4b9ac9a310391c8662c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;