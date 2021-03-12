import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMblQIsAPHGF-0juokhQ8bMapR8fxSdSU",
    authDomain: "twitter-clone-cdbd9.firebaseapp.com",
    projectId: "twitter-clone-cdbd9",
    storageBucket: "twitter-clone-cdbd9.appspot.com",
    messagingSenderId: "911474055873",
    appId: "1:911474055873:web:4c92b018ebfde0858ed240",
    measurementId: "G-Y70K8E4MXZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;