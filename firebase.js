import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBC_ueYL7GJIOtFoWOm9J-2zpXGqCWuo",
  authDomain: "javaexecutor-e63e1.firebaseapp.com",
  projectId: "javaexecutor-e63e1",
  storageBucket: "javaexecutor-e63e1.appspot.com",
  messagingSenderId: "553358719629",
  appId: "1:553358719629:web:ece119673656069080c0c4",
  measurementId: "G-Y19FYDN672"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };