// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3M8N8wN8AlEmQutcuW5aYzOdenjE7jBQ",
  authDomain: "midprojectcv.firebaseapp.com",
  databaseURL: "https://midprojectcv-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "midprojectcv",
  storageBucket: "midprojectcv.firebasestorage.app",
  messagingSenderId: "641896223764",
  appId: "1:641896223764:web:411b0ab4e9e4db48538301",
  measurementId: "G-8MLTNZLMJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);