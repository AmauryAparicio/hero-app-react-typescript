import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { iRoutes } from "./../Interfaces";

const RouteWithSubRoutes: FunctionComponent<iRoutes> = (route): JSX.Element => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default RouteWithSubRoutes;
