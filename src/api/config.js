// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsV87EFtraEwnaONGcRljWYSGW94MomxI",
    authDomain: "myprojectreact-d5866.firebaseapp.com",
    projectId: "myprojectreact-d5866",
    storageBucket: "myprojectreact-d5866.appspot.com",
    messagingSenderId: "888420279980",
    appId: "1:888420279980:web:ecd3e72b3d993849022109",
    measurementId: "G-EVG7J19HM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

