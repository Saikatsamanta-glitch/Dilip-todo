// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqfZws_HAVoGZGd2AnntXj0rxXhtdI-N8",
  authDomain: "fir-3196c.firebaseapp.com",
  projectId: "fir-3196c",
  storageBucket: "fir-3196c.appspot.com",
  messagingSenderId: "7233482726",
  appId: "1:7233482726:web:e719439cb80a3cc5917027",
  measurementId: "G-XC4J4CRPWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);