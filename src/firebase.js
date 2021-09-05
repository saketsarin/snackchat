import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGQAAilv2fq5-6a2H_0Y1rVhz78QX8U68",
  authDomain: "snackchat-2ffbd.firebaseapp.com",
  projectId: "snackchat-2ffbd",
  storageBucket: "snackchat-2ffbd.appspot.com",
  messagingSenderId: "237777640904",
  appId: "1:237777640904:web:9cd8a276a9660f524a34fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
