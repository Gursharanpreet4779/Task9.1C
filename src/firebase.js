// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCi1P23C2JinaVF-Z4J-sBNfYdwhQSCe44",
  authDomain: "webapp-63662.firebaseapp.com",
  projectId: "webapp-63662",
  storageBucket: "webapp-63662.appspot.com",
  messagingSenderId: "807336420695",
  appId: "1:807336420695:web:7c49cab69d0bc4ac470a12"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
