import React, { FunctionComponent, useEffect, useReducer } from "react";
import AuthContext from "./auth/authContext";
import AppRouter from "./routers/AppRouter";
import authReducer from "./auth/authReducer";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user") as string) || { logged: false }
  );
};

const HeroesApp: FunctionComponent = (): JSX.Element => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
