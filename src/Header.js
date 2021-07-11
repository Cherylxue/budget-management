import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";

function Header(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(null);
  const auth = firebase.auth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Signed Out");
      }
    });
  }, []);

  function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          setShow(false);
        });
    });
  }

  return (
    <div className="header-container">
      {user ? (
        <>
          <h4>{user.displayName}</h4>
          <Button onClick={() => auth.signOut().then(() => setUser(null))}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button onClick={handleShow}>Sign In</Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose your login option.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={googleSignIn}>Login with Google</button>
          <button>Login with Email </button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
