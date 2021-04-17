import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/login.css";

// import PacientesState from "./contexts/pacientesState";
import "animate.css/animate.min.css";
import AdminRouter from "./modules/admin/screens/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import AuthState from "./contexts/authState";
import RegisterScreen from "./modules/auth/screens/register/RegisterScreen";

const App = () => {
  return (
    <AuthState>
      {/* <PacientesState> */}
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminRouter} />
          <Route path="/register" component={RegisterScreen} />
          <Route exact path="/" component={AuthRouter} />
          {/* <Route path="/" componrnet={InvitadoHomeScreen} /> */}
          {/* <Redirect to={"/"}>  otra opcion */}
          {/* <Route component={InvitadoHomeScreen} />  cualquier ruta  que no exista, envia a invitadoHomeScreen*/}
        </Switch>
      </BrowserRouter>
      {/* </PacientesState> */}
    </AuthState>
  );
};

export default App;
