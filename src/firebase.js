import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpyM_7lpOK8R5lS_7yEQDz7HZ0Qr3s9S8",
  authDomain: "portfolio-b8c73.firebaseapp.com",
  projectId: "portfolio-b8c73",
  storageBucket: "portfolio-b8c73.appspot.com",
  messagingSenderId: "473584367611",
  appId: "1:473584367611:web:2e10640b8b8ee367773d5e",
  measurementId: "G-KKQ3X1HGB3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
