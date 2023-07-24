// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_A_fznGQLxmMfpK3zdfZ1n4rDL0EN9yo",
  authDomain: "realtor-clone-react-a0f88.firebaseapp.com",
  projectId: "realtor-clone-react-a0f88",
  storageBucket: "realtor-clone-react-a0f88.appspot.com",
  messagingSenderId: "902024369034",
  appId: "1:902024369034:web:b0a86f2cdd17e13ab6ee73"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();