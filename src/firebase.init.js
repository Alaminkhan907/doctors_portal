// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw9-A_3o8caQ-4sx7tDcVxzMdPKqwjXjk",
  authDomain: "doctors-portal-e4aba.firebaseapp.com",
  projectId: "doctors-portal-e4aba",
  storageBucket: "doctors-portal-e4aba.appspot.com",
  messagingSenderId: "486026671420",
  appId: "1:486026671420:web:284c295c476149d2bfda39",
  measurementId: "G-1K0R2PHEWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;