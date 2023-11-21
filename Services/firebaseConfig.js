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
  apiKey: "AIzaSyAH8BM2i07lzrRpY1CZo1u7dRt-OUyQeNI",
  authDomain: "teste-b63e4.firebaseapp.com",
  projectId: "teste-b63e4",
  storageBucket: "teste-b63e4.appspot.com",
  messagingSenderId: "585690727120",
  appId: "1:585690727120:web:b83fb00b6405836d7114d5",
  measurementId: "G-KGXK2CF7SR"
};

// Initialize Firebase
const FireBase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(FireBase_app);
const auth = getAuth(FireBase_app);
const db = getFirestore(FireBase_app);

export { FireBase_app, auth, db };