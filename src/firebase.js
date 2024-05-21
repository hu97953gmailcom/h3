// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw2fBp9VAoGicY5DVvm-0LuJcpOTnXu6s",
  authDomain: "todo-18ea0.firebaseapp.com",
  projectId: "todo-18ea0",
  storageBucket: "todo-18ea0.appspot.com",
  messagingSenderId: "7222998911",
  appId: "1:7222998911:web:84f439f7ac59f862230c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);