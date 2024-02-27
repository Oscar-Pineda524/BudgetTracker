// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB7-C0q5BEvZ3QD8sW5oD3MDQwqZeMqtw",
  authDomain: "finance-tracker-8021f.firebaseapp.com",
  projectId: "finance-tracker-8021f",
  storageBucket: "finance-tracker-8021f.appspot.com",
  messagingSenderId: "162155865945",
  appId: "1:162155865945:web:34699e54064cfce7d88e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth} 