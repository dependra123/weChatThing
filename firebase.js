// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import realtime database, firestore, storage, and auth
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCUSO0nzFW53XIyvBVrqsfAW0NGb-8Ryg",
  authDomain: "wechat-6213f.firebaseapp.com",
  databaseURL: "https://wechat-6213f-default-rtdb.firebaseio.com",
  projectId: "wechat-6213f",
  storageBucket: "wechat-6213f.appspot.com",
  messagingSenderId: "839423097999",
  appId: "1:839423097999:web:9ae7c9b7bb0a0a783444fa",
  measurementId: "G-P5DQWQDYG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth,email, password);
};

export { db, firestore, storage, createUser,auth };
