import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhp5hnSGoOFcTqt4o9Bs9h1MuBbsKY8Qw",
  authDomain: "facebook-clone-nextjs-783e9.firebaseapp.com",
  projectId: "facebook-clone-nextjs-783e9",
  storageBucket: "facebook-clone-nextjs-783e9.appspot.com",
  messagingSenderId: "465180370622",
  appId: "1:465180370622:web:b1a45a2df122e3ec4860ef",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
