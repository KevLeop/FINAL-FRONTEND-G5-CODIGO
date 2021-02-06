import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../../components/Header";
import CitasState from "../../../contexts/CitasState";
import HistoriasClinicasState from "../../../contexts/historiasClinicasState";
import TratamientosState from "../../../contexts/tratamientosState";
import CitasScreen from "./Citas/CitasScreen";
import HistoriasClinicasScreen from "./HistoriasClinicas/HistoriasClinicasScreen";
import HomeScreen from "./Home/HomeScreen";
import ListaPacientesScreen from "./ListaPacientes/ListaPacientesScreen";

const AdminRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <TratamientosState>
          <HistoriasClinicasState>
            <Route
              path="/admin/ListaPacientes"
              component={ListaPacientesScreen}
            />
            <Route
              path="/admin/HistoriasClinicas"
              component={HistoriasClinicasScreen}
            />
            <CitasState>
              <Route path="/admin/Citas" component={CitasScreen} />
            </CitasState>

            <Route path="/admin/home" component={HomeScreen} />
          </HistoriasClinicasState>
        </TratamientosState>
      </Switch>
    </>
  );
};

export default AdminRouter;
