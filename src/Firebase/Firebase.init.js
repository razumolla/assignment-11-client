// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ1i4LzCOWtwJJz_v2gf12jYul2C1-Ar0",
    authDomain: "car-dealer-assignment-11.firebaseapp.com",
    projectId: "car-dealer-assignment-11",
    storageBucket: "car-dealer-assignment-11.appspot.com",
    messagingSenderId: "811778653295",
    appId: "1:811778653295:web:03e8d4e7530f087d77219a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;