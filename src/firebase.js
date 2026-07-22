// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPuAqw4cEtoGVvN5ol-KyUz2_7-gObAkU",
  authDomain: "bookverse-bfad4.firebaseapp.com",
  projectId: "bookverse-bfad4",
  storageBucket: "bookverse-bfad4.firebasestorage.app",
  messagingSenderId: "258864683040",
  appId: "1:258864683040:web:e5d134d711e8b118634445"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);