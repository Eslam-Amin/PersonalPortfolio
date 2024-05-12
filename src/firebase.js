// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBJcBdjATuUUqIVDOdIPKNC3TQT9--LbU",
    authDomain: "eslam-amin-portfolio.firebaseapp.com",
    projectId: "eslam-amin-portfolio",
    storageBucket: "eslam-amin-portfolio.appspot.com",
    messagingSenderId: "1047071145383",
    appId: "1:1047071145383:web:774b27eb4b6dd170924a82",
    measurementId: "G-FH3DH2YQ91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
