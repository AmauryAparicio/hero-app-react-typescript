import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          {Routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
