import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "animate.css/animate.min.css";

import HomeScreen from "./screens/Home/HomeScreen";
import ListaPacientesScreen from "./screens/ListaPacientes/ListaPacientesScreen";
import HistoriasClinicasScreen from "./screens/HistoriasClinicas/HistoriasClinicasScreen";
import CitasScreen from "./screens/Citas/CitasScreen";
import PacientesState from "./contexts/pacientesState";
import HistoriasClinicasState from "./contexts/historiasClinicasState";
import CitasState from "./contexts/CitasState";

const App = () => {
  return (
    <PacientesState>
      <BrowserRouter>
        <Header />
        <HistoriasClinicasState>
          <Switch>
            <Route path="/ListaPacientes" component={ListaPacientesScreen} />

            <Route
              path="/HistoriasClinicas"
              component={HistoriasClinicasScreen}
            />
            <CitasState>
              <Route path="/Citas" component={CitasScreen} />
            </CitasState>
            <Route path="/" component={HomeScreen} />
          </Switch>
        </HistoriasClinicasState>
      </BrowserRouter>
    </PacientesState>
  );
};

export default App;
