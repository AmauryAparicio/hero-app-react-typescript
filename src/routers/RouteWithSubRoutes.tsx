import React, { FunctionComponent, useContext, useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import AuthContext from "../auth/authContext";
import { routesType } from "../types/types";
import { iAuthContext, iRoutes, iAuthState } from "./../Interfaces";

const RouteWithSubRoutes: FunctionComponent<iRoutes> = (route): JSX.Element => {
  const { path, routes, type } = route;
  const { user } = useContext(AuthContext) as iAuthContext;
  const { logged } = user as iAuthState;
  const { auth, hidden } = routesType;

  const location = useLocation();

  useEffect(() => {
    routes !== undefined &&
      routes.map((subRoutes) => {
        subRoutes.type = type;
        return routes;
      });
  });

  switch (type) {
    case auth:
      localStorage.setItem(
        "lastPath",
        location.pathname + (location.search ? location.search : "")
      );
      return logged ? (
        <Route
          path={path}
          render={(props) => <route.component {...props} routes={routes} />}
        />
      ) : (
        <Redirect to="/login" />
      );
    case hidden:
      return !logged ? (
        <Route
          path={path}
          render={(props) => <route.component {...props} routes={routes} />}
        />
      ) : (
        <Redirect to="/" />
      );
    default:
      return (
        <Route
          path={path}
          render={(props) => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      );
  }
};

export default RouteWithSubRoutes;
