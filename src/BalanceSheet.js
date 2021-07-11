import React from "react";
import firebase from "firebase/app";
import { Button } from "react-bootstrap";

function BalanceSheet(props) {
  const firestore = firebase.firestore();

  return (
    <>
      <li>
        <ul>{props.name}</ul>
        <ul>blahblah</ul>
        <ul>blahblah</ul>
        <ul>blahblah</ul>
        <ul>blahblah</ul>
      </li>
      <Button>+</Button>
    </>
  );
}

export default BalanceSheet;
