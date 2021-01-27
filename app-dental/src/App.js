import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import PacientesState from "./contexts/pacientesState";
import "animate.css/animate.min.css";
import AdminRouter from "./modules/admin/screens/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";

const App = () => {
  return (
    <PacientesState>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminRouter} />
          <Route path="/" exact component={AuthRouter} />
        </Switch>
      </BrowserRouter>
    </PacientesState>
  );
};

export default App;
