// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuE-ERm_wRcymH4RlXNNJi-_thf5dsl2Q",
  authDomain: "geobear-f0c78.firebaseapp.com",
  projectId: "geobear-f0c78",
  storageBucket: "geobear-f0c78.appspot.com",
  messagingSenderId: "973556781339",
  appId: "1:973556781339:web:501d9988f91095b62a43be"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
