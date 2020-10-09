import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

const LoginScreen: FunctionComponent = (): JSX.Element => {
  const history = useHistory();
  const handleLogin: () => void = () => {
    history.replace("/");
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
