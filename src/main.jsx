import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXW-CbwgJYkabxwNkol2edg6YAjNcto2g",
  authDomain: "devstore-e61ff.firebaseapp.com",
  projectId: "devstore-e61ff",
  storageBucket: "devstore-e61ff.appspot.com",
  messagingSenderId: "586565300950",
  appId: "1:586565300950:web:6550a04fb634f478264f77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
