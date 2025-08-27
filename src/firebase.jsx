// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9ZqlceEA5d7vCkZ7O7p1Xy5jlra4aask",
  authDomain: "frontend-app-d71b7.firebaseapp.com",
  databaseURL: "https://frontend-app-d71b7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frontend-app-d71b7",
  storageBucket: "frontend-app-d71b7.firebasestorage.app",
  messagingSenderId: "812139634178",
  appId: "1:812139634178:web:2dbd4d1593a7ca33a1911b"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);