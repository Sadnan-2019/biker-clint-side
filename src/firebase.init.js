 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHgnO2W4XnGOA3uHiskN7oTbmc1rCuSZM",
  authDomain: "tools-manufacture-970f3.firebaseapp.com",
  projectId: "tools-manufacture-970f3",
  storageBucket: "tools-manufacture-970f3.appspot.com",
  messagingSenderId: "460185034397",
  appId: "1:460185034397:web:495e07767d11cbfe3fbe74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;