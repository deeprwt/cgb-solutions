
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrlIjfIrgmqZT3CNl_SwuS3qZzAkQVbHA",
  authDomain: "cgbformdata.firebaseapp.com",
  projectId: "cgbformdata",
  storageBucket: "cgbformdata.appspot.com",
  messagingSenderId: "447466504672",
  appId: "1:447466504672:web:a47375f33a5b3ee493ab85",
  measurementId: "G-7BEQNWNL7P"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance
const auth = getAuth(app);
const storage = getStorage(app);

// Optional: Enable analytics if needed
// getAnalytics(app);

export { db, auth, storage, app }; // Export Firestore instance
