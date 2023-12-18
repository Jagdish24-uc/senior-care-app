// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf7TqTDD-_qim0WrOGlrevTFCDz0CGx5s",
    authDomain: "news-app-8985f.firebaseapp.com",
    projectId: "news-app-8985f",
    storageBucket: "news-app-8985f.appspot.com",
    messagingSenderId: "245372020574",
    appId: "1:245372020574:web:017b4ff9e2742906c711cf"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();