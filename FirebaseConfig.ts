// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxYZ7DmTPhlQpELgMk3kPMBg8PeMFhbM",
  authDomain: "resqmate-c2d11.firebaseapp.com",
  projectId: "resqmate-c2d11",
  storageBucket: "resqmate-c2d11.firebasestorage.app",
  messagingSenderId: "996199384700",
  appId: "1:996199384700:web:6877b372ef8ad5fb29abf9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);