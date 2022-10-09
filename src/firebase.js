import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxfWFXcOwTY1xWHcJfMwXcprCXcvFSG30",
  authDomain: "linkedin-clone-yt-1145f.firebaseapp.com",
  projectId: "linkedin-clone-yt-1145f",
  storageBucket: "linkedin-clone-yt-1145f.appspot.com",
  messagingSenderId: "171333597099",
  appId: "1:171333597099:web:b8bb0178b6d05940eac4ee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
