import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

export const SignInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signInError, setSignInError] = useState("");
  const history = useHistory();

  const onClikSignIn = async () => {
    try {
      setSignInError("");
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue);
      history.push("/");
    } catch (e) {
      setSignInError(e.message);
    }
  };

  return (
    <div className="full-height-page">
      <div className="centered-container space-before">
        {signInError && (
          <div>
            <p className="error-message">{signInError}</p>
          </div>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="full-width space-before"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className="full-width space-before"
        />

        <button className="full-width" onClick={onClikSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
