import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";

export const NavBar = ({ user }) => {
  const history = useHistory();
  const onClickSignOut = async () => {
    try {
      await firebase.auth().signOut();
      history.push("/sign-in");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="app-heading">Members-Only Page</h1>
      </Link>
      {user && (
        <>
          <button className="sign-out-button" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="logged-in-as space-before">Logged in as {user.email}</p>
        </>
      )}
    </nav>
  );
};
