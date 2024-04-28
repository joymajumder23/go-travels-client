// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7BjWfRnkHOiHwsBD5hqN8dR7BeApeCas",
  authDomain: "tenth-assignment-8e144.firebaseapp.com",
  projectId: "tenth-assignment-8e144",
  storageBucket: "tenth-assignment-8e144.appspot.com",
  messagingSenderId: "489225169710",
  appId: "1:489225169710:web:fc8b3409c4cff4995568bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;