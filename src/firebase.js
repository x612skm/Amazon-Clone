// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyByNRhAm42SomAJd1102BOUw6rQNlDiL8g",
    authDomain: "clone-ce2b9.firebaseapp.com",
    projectId: "clone-ce2b9",
    storageBucket: "clone-ce2b9.appspot.com",
    messagingSenderId: "284442031589",
    appId: "1:284442031589:web:0504870a55bb79dd21ab0c",
    measurementId: "G-4SKG1B1CF8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };