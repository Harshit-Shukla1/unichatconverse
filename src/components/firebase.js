import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCgyb_s3g0nus5O_tJtfw2O0E4BFhYEsv8",
    authDomain: "unichat-b4fc7.firebaseapp.com",
    projectId: "unichat-b4fc7",
    storageBucket: "unichat-b4fc7.appspot.com",
    messagingSenderId: "97973220069",
    appId: "1:97973220069:web:6e147026c0543cf1ed9a0c"
  }).auth();