import React, { FunctionComponent } from "react";
import Navbar from "./../ui/Navbar";
import { Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import { iRoutes } from "./../Interfaces";

const DashboardRouter: FunctionComponent<{ routes: Array<iRoutes> }> = (
  routes
) => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          {routes.routes.map((route) => {
            return <RouteWithSubRoutes key={route.path} {...route} />;
          })}
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRouter;
