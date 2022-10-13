// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb7TjhI46seWGFliwbrZ-5dlKtvJIvB4o",
  authDomain: "mideadores-4298a.firebaseapp.com",
  databaseURL: "https://mideadores-4298a-default-rtdb.firebaseio.com",
  projectId: "mideadores-4298a",
  storageBucket: "mideadores-4298a.appspot.com",
  messagingSenderId: "527995253244",
  appId: "1:527995253244:web:b3ee00c3c98399ff7c0279",
  measurementId: "G-3Y265NFSNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);