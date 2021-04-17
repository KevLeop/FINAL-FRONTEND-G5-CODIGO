import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
      </Switch>
    </>
  );
};

export default AuthRouter;
