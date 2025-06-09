// firebase.js — for use directly in browser
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFCnEJTWOoBQypkedvfAefAWW-l00LnNM",
  authDomain: "white-mountains-db.firebaseapp.com",
  projectId: "white-mountains-db",
  storageBucket: "white-mountains-db.firebasestorage.app",
  messagingSenderId: "447497223981",
  appId: "1:447497223981:web:9c935571101f7688acdda4",
  measurementId: "G-PJNG36PPW6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app); // ✅ Add this

export { db, auth };
