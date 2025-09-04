// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvslwl4gyi2NDvtaCUwNWWKYI_xv6nCo",
  authDomain: "mobile-app-p---tracker.firebaseapp.com",
  projectId: "mobile-app-p---tracker",
  storageBucket: "mobile-app-p---tracker.firebasestorage.app",
  messagingSenderId: "356886234311",
  appId: "1:356886234311:web:b11169a4a60febc29aeae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)