// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn8UsInKaDpqnxoGOi5CTsTouwQAJ3FB0",
  authDomain: "ds2023-74d02.firebaseapp.com",
  projectId: "ds2023-74d02",
  storageBucket: "ds2023-74d02.appspot.com",
  messagingSenderId: "61322629826",
  appId: "1:61322629826:web:2ff9c124b676a793a8e15b",
  measurementId: "G-TZ1TKBDR30"
};

// Initialize Firebase
const FireBase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(FireBase_app);
const auth = getAuth(FireBase_app);
const db = getFirestore(FireBase_app);

export { FireBase_app, auth, db };