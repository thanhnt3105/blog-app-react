// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDs2t_Natf7sJ1l6OQaXBNJdupgZkDFsvI",
	authDomain: "blog-1674b.firebaseapp.com",
	projectId: "blog-1674b",
	storageBucket: "blog-1674b.appspot.com",
	messagingSenderId: "883180953867",
	appId: "1:883180953867:web:ec68ad47dfebd34772420e",
	measurementId: "G-M2JGKV4CY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
