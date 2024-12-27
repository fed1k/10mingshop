import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAadIzyZiK4PG24IG00AVQuWLRxJbuGWDE",
  authDomain: "mingshop-a42c6.firebaseapp.com",
  projectId: "mingshop-a42c6",
  storageBucket: "mingshop-a42c6.firebasestorage.app",
  messagingSenderId: "836391337880",
  appId: "1:836391337880:web:80bfdf57b4d03af35475ed",
  measurementId: "G-5JSYQDX7MC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);