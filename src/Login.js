import React from "react";
import "./css/Login.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/appSlice";
import Logo from "./img/logo.svg";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <img src={Logo} alt="" />
        <Button className="loginBtn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
