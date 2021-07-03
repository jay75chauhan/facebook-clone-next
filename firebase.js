import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg7s94d6_YadwdcLMy14LOwZhfknSmi1g",
  authDomain: "facebook-clone-87bad.firebaseapp.com",
  projectId: "facebook-clone-87bad",
  storageBucket: "facebook-clone-87bad.appspot.com",
  messagingSenderId: "1088883095535",
  appId: "1:1088883095535:web:dc03e4d2f3052d5dffe81a",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
