// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo-csVN5JwUf7K9z9y4kmhFsA1dbMQ9bk",
  authDomain: "simple-firebase-81a5d.firebaseapp.com",
  projectId: "simple-firebase-81a5d",
  storageBucket: "simple-firebase-81a5d.appspot.com",
  messagingSenderId: "681354388098",
  appId: "1:681354388098:web:4903127dc000604c8c0a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;