import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const render = () => {
    return props.loggedIn ? <Component {...props} /> : <Redirect to="/movies" />;
  }
  return (
    <Switch>
      <Route path={props.path}>
      { render }
    </Route>
    </Switch>
  );
};

export default ProtectedRoute;