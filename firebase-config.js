// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKymhtFhKq9PDQnBetwcqgwpHSG8CZ26E",
  authDomain: "prasactronics-b28eb.firebaseapp.com",
  databaseURL: "https://prasactronics-b28eb-default-rtdb.firebaseio.com",
  projectId: "prasactronics-b28eb",
  storageBucket: "prasactronics-b28eb.appspot.com",
  messagingSenderId: "934870768233",
  appId: "1:934870768233:web:51cf5462b478c8973ec9e7",
  measurementId: "G-J1MS1Y6H1V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
