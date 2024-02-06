// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--NFjEvHkkpxIx3RKPM5RXH4CnvDQjsk",
  authDomain: "react-shop-app-33fe7.firebaseapp.com",
  projectId: "react-shop-app-33fe7",
  storageBucket: "react-shop-app-33fe7.appspot.com",
  messagingSenderId: "30275247076",
  appId: "1:30275247076:web:bcb1e915c628385e7e85f1",
  measurementId: "G-G97BQ30THX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;