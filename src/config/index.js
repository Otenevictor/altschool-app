// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAeUFVBp29HxSfxsaQe2tQNdf8rllXJjQ",
  authDomain: "altschool-exam-counter.firebaseapp.com",
  projectId: "altschool-exam-counter",
  storageBucket: "altschool-exam-counter.appspot.com",
  messagingSenderId: "471433305148",
  appId: "1:471433305148:web:01ee5a095afbbb45773739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;