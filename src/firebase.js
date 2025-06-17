import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi_6fn15xo_wSrdaF9xjE883N8oz6GDXE",
  authDomain: "tut-hub-3652f.firebaseapp.com",
  projectId: "tut-hub-3652f",
  storageBucket: "tut-hub-3652f.firebasestorage.app",
  messagingSenderId: "877677607533",
  appId: "1:877677607533:web:a998c217be6ac7980c5d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);