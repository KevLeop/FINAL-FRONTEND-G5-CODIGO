import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import ListaPacientesScreen from "./screens/ListaPacientesScreen";
import PacientesState from "./contexts/pacientesState";
import HistoriasClinicasScreen from "./screens/HistoriasClinicasScreen";
import HistoriasClinicasState from "./contexts/historiasClinicasState";

const App = () => {
  return (
    <PacientesState>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/ListaPacientes" component={ListaPacientesScreen} />
          <HistoriasClinicasState>
            <Route
              path="/HistoriasClinicas"
              component={HistoriasClinicasScreen}
            />
          </HistoriasClinicasState>
          {/* <Route path="/Citas" component={Citas} /> */}
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </PacientesState>
  );
};

export default App;
