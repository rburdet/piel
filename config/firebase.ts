import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAzJA3w-CgJyTv5GBHPHiqHOEH9wTC9lCQ",
  authDomain: "piel-19733.firebaseapp.com",
  projectId: "piel-19733",
  storageBucket: "piel-19733.firebasestorage.app",
  messagingSenderId: "682770413691",
  appId: "1:682770413691:web:70d82859869edc54f60ade",
  measurementId: "G-ZVQSXS30YT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
