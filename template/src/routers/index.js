import React from "react";
import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";
import PublicRoute from "./PublicRoute";

const RouterWrapper = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <PublicRoute key={route.key} exact path={route.path} component={route.component} />
      ))}
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default RouterWrapper;
