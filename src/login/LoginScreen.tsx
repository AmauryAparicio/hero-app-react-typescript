import React, { FunctionComponent, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../auth/authContext";
import { iAuthContext } from "../Interfaces";
import { authActions } from "../types/types";

const LoginScreen: FunctionComponent = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext) as iAuthContext;
  const handleLogin: () => void = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: authActions.login,
      payload: {
        name: "Amaury",
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
