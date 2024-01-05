// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzNpgzHuJPyywaK735DlNq7QUPw1VDcA4",
  authDomain: "news-app-ce607.firebaseapp.com",
  projectId: "news-app-ce607",
  storageBucket: "news-app-ce607.appspot.com",
  messagingSenderId: "484203486643",
  appId: "1:484203486643:web:874cc73c05562430107fc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
