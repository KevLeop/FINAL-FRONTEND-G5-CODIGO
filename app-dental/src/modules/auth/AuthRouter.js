import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <LoginScreen />
      <Switch>
        {/* <Route path="/login" component={LoginScreen} /> */}
        <Route path="/register" component={RegisterScreen} />
      </Switch>
    </>
  );
};

export default AuthRouter;
