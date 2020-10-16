import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { iRoutes } from "./../Interfaces";

const RouteWithSubRoutes: FunctionComponent<iRoutes> = (route) => {
  const { path, routes } = route;
  return (
    <Route
      path={path}
      render={(props) => <route.component {...props} routes={routes} />}
    />
  );
};

export default RouteWithSubRoutes;
