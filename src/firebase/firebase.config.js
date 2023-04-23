// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0s9xAkyevC3Os-JQAZJwZpi6InOLpq3M",
  authDomain: "the-firebase-dragon.firebaseapp.com",
  projectId: "the-firebase-dragon",
  storageBucket: "the-firebase-dragon.appspot.com",
  messagingSenderId: "789234066489",
  appId: "1:789234066489:web:9409eaa89470b0fb3059e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;