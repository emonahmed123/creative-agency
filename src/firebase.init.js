// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAstVX6dRZOcIMfpqDGSxZ_ldV-TWH9RJs",
  authDomain: "creativ-agency-59651.firebaseapp.com",
  projectId: "creativ-agency-59651",
  storageBucket: "creativ-agency-59651.appspot.com",
  messagingSenderId: "777134999753",
  appId: "1:777134999753:web:1c14806f63f7f3b7346518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth