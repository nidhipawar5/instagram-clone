import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpcISDtYEuCIWuuZVJr6oU8PopGSGADaE",
  authDomain: "instagram-clonenp.firebaseapp.com",
  databaseURL: "https://instagram-clonenp.firebaseio.com",
  projectId: "instagram-clonenp",
  storageBucket: "instagram-clonenp.appspot.com",
  messagingSenderId: "69843636693",
  appId: "1:69843636693:web:ffad83a03836b969b4ed5c",
  measurementId: "G-N3H5M5QVHK"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage= firebase.storage();

export{db, auth, storage};
//export default db;