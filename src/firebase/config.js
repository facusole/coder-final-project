// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoWeXFYlazg_B4hJeJxCN-GKoMjNQfnsU",
  authDomain: "pluma-de-papel-ecommer.firebaseapp.com",
  projectId: "pluma-de-papel-ecommer",
  storageBucket: "pluma-de-papel-ecommer.appspot.com",
  messagingSenderId: "218021243567",
  appId: "1:218021243567:web:40f70c23b84bd8fb80025a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);