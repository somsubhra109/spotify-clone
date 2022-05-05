import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firbase";
import { useStateValue } from "../StateProvider/StateProvider";
import { actionTypes } from "../StateProvider/reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="loginText">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
