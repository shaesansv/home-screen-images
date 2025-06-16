// Import the functions you need from the SDKs you need
// Example: Using Firestore
import { getFirestore } from "firebase/firestore";
import app from './firebase';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const db = getFirestore(app);
const auth = getAuth(app);


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjtNjecUHSBBF2c9IY4jc10_GBM9L2W7M",
  authDomain: "tutorial-hub-30d6a.firebaseapp.com",
  projectId: "tutorial-hub-30d6a",
  storageBucket: "tutorial-hub-30d6a.firebasestorage.app",
  messagingSenderId: "349416013944",
  appId: "1:349416013944:web:8c9ec9d79d870e59636d8d",
  measurementId: "G-8KHMPY6PWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);