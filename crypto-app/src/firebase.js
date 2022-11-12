// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcA6tYfoZKvkzuvOSbjPoDRlutYnTdo-E",
  authDomain: "crypto-ac94d.firebaseapp.com",
  projectId: "crypto-ac94d",
  storageBucket: "crypto-ac94d.appspot.com",
  messagingSenderId: "240747403063",
  appId: "1:240747403063:web:2ab15233b2a2487035ecb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)