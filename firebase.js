import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZanLY7rgEXO4CT6nqB5_DbK9A_YTy6uc",
    authDomain: "test-53c1e.firebaseapp.com",
    projectId: "test-53c1e",
    storageBucket: "test-53c1e.appspot.com",
    messagingSenderId: "299737923965",
    appId: "1:299737923965:web:7df5121174c9888a234c14"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

export const auth = getAuth(app)
