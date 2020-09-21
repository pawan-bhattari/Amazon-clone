import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJtB0whz68YSX3IMLErran7EyJ7hNaH3M",
    authDomain: "clone-202a9.firebaseapp.com",
    databaseURL: "https://clone-202a9.firebaseio.com",
    projectId: "clone-202a9",
    storageBucket: "clone-202a9.appspot.com",
    messagingSenderId: "261636655624",
    appId: "1:261636655624:web:7712e031c5e1a170931fbd",
    measurementId: "G-WHXC1KLE01"
});

const auth = firebase.auth();

export { auth };

  