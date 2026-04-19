// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aadi-ai-yt.firebaseapp.com",
  projectId: "aadi-ai-yt",
  storageBucket: "aadi-ai-yt.firebasestorage.app",
  messagingSenderId: "855383900164",
  appId: "1:855383900164:web:b377ad818b267f61217551"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}