import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import React, { useState } from "react";
import Header from "./Header.js";
import MonthlyDisplay from "./MonthlyDisplay";

const firebaseConfig = {
  apiKey: "AIzaSyBbFCLxkbTt8nFLsGO-_KQMW-B-MTwPSdY",
  authDomain: "budget-management-dd231.firebaseapp.com",
  projectId: "budget-management-dd231",
  storageBucket: "budget-management-dd231.appspot.com",
  messagingSenderId: "214832321974",
  appId: "1:214832321974:web:dbb46ae7c51dd931525d17",
  measurementId: "G-7EQ6WLB2Y1",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Budget Management</h2>

      <MonthlyDisplay />
    </div>
  );
}

export default App;
