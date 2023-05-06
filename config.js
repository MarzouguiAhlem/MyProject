// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

import { enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUr_uLWHN4S_RzSNwv5jkiM0MN4wUb8vA",
  authDomain: "health-4699e.firebaseapp.com",
  projectId: "health-4699e",
  storageBucket: "health-4699e.appspot.com",
  messagingSenderId: "342767617607",
  appId: "1:342767617607:web:c710f0810ac8b484a29362",
  measurementId: "G-Q7YS9Z3HCX"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const storage = firebase.storage();

firebase.firestore().settings({
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false
});

export { firebase, storage };
