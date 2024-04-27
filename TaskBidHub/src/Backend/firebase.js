// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzeS0gmMWe_p-N2XhjfhhLslJ2uuZEXkU",
  authDomain: "taskbidhub.firebaseapp.com",
  projectId: "taskbidhub",
  storageBucket: "taskbidhub.appspot.com",
  messagingSenderId: "245042801496",
  appId: "1:245042801496:web:ab5f6fa57ad8756a65132d",
  measurementId: "G-2KMVN7JJRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);