// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNZLJTHE2IAzdKFNn_G6ICeAiMU-xvfY",
  authDomain: "netflix-gpt-107.firebaseapp.com",
  projectId: "netflix-gpt-107",
  storageBucket: "netflix-gpt-107.appspot.com",
  messagingSenderId: "795145022875",
  appId: "1:795145022875:web:ae7f37c940b723de2e453e",
  measurementId: "G-L7ZSZ073YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();