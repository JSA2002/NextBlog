// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-412108.firebaseapp.com",
  projectId: "nextblog-412108",
  storageBucket: "nextblog-412108.appspot.com",
  messagingSenderId: "766974372228",
  appId: "1:766974372228:web:aed428a1f70f9a1980d5d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);