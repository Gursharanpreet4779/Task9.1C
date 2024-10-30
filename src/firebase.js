// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCA8XH2Pf0NO9kHypb8br-td26qtlvrESY",
  authDomain: "task91c-cb31a.firebaseapp.com",
  projectId: "task91c-cb31a",
  storageBucket: "task91c-cb31a.appspot.com",
  messagingSenderId: "406068552870",
  appId: "1:406068552870:web:e9289cee817b0eece44067",
  measurementId: "G-L21JXY8HXG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
