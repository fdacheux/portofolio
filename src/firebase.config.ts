// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// import { initializeApp } from 'firebase-admin/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP__storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

console.log(firebaseConfig)

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const db = initializeFirestore(firebaseApp, );
export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});
// export const db = initializeFirestore(firebaseApp, );