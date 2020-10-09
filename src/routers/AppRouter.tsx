import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AppRouter: FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Switch>
          {Routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
