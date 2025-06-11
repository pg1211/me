// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfreUUCm8xeI6QW2tXnf1yaVmMRNnWJsU",
    authDomain: "portfolio-project-f165c.firebaseapp.com",
    projectId: "portfolio-project-f165c",
    storageBucket: "portfolio-project-f165c.firebasestorage.app",
    messagingSenderId: "958477223499",
    appId: "1:958477223499:web:694b067f0bf8837a322fce",
    measurementId: "G-NH2RCTYXFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

export { db }; // Export the database instance

// const analytics = getAnalytics(app);
