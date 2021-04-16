import React from "react";
import { Route, Redirect } from "react-router-dom";

const Private = ({ path, component: Componente }) => {
  const pasar = false;
  return pasar ? (
    <Route path={path} component={Componente} />
  ) : (
    <Redirect to="/" />
  );
};

export default Private;
