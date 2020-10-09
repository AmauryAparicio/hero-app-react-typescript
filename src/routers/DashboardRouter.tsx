import React from "react";
import { FunctionComponent } from "react";
import { iRoutes } from "./../Interfaces";
import Navbar from "./../ui/Navbar";
import { Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const DashboardRouter: FunctionComponent<{ routes?: Array<iRoutes> }> = ({
  routes,
}) => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          {routes?.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRouter;
