// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-10PMzXo0NTgxeCUFy5KTYSfxH8RB6g",
  authDomain: "crypto-ee282.firebaseapp.com",
  projectId: "crypto-ee282",
  storageBucket: "crypto-ee282.appspot.com",
  messagingSenderId: "976323386150",
  appId: "1:976323386150:web:02f13124b9bda19e897fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export default app