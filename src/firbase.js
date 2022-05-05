import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5mZKD1EkPZF2C3FE2X2UewHmoPFXHFhM",
  authDomain: "whats-app-clone-f6ccd.firebaseapp.com",
  projectId: "whats-app-clone-f6ccd",
  storageBucket: "whats-app-clone-f6ccd.appspot.com",
  messagingSenderId: "578538142399",
  appId: "1:578538142399:web:3a2ee32932c061fcfbe40a",
  measurementId: "G-7KNWH6XNKV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
