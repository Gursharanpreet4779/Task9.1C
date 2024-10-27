// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBQw2Oj4qplt8nEFLq_A99QbzNmM1nF0kY",
  authDomain: "staff-app-18f01.firebaseapp.com",
  projectId: "staff-app-18f01",
  storageBucket: "staff-app-18f01.appspot.com",
  messagingSenderId: "574171045101",
  appId: "1:574171045101:web:f073c363bdcd0e3cfb40e4",
  measurementId: "G-JMJG94BHBD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
