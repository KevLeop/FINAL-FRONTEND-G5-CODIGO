import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../../components/Header";
import CitasState from "../../../contexts/CitasState";
import HistoriasClinicasState from "../../../contexts/historiasClinicasState";
import PacientesState from "../../../contexts/pacientesState";
import TratamientosState from "../../../contexts/tratamientosState";
import CitasScreen from "./Citas/CitasScreen";
import ContabilidadScreen from "./Contabilidad/ContabilidadScreen";
import HistoriasClinicasScreen from "./HistoriasClinicas/HistoriasClinicasScreen";
import HomeScreen from "./Home/HomeScreen";
import ListaPacientesScreen from "./ListaPacientes/ListaPacientesScreen";
import RegisterScreen from "../../auth/screens/register/RegisterScreen";

const AdminRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <TratamientosState>
          <PacientesState>
            <Route
              path="/admin/ListaPacientes"
              component={ListaPacientesScreen}
            />
            <HistoriasClinicasState>
              <Route
                path="/admin/HistoriasClinicas"
                component={HistoriasClinicasScreen}
              />
              <CitasState>
                <Route path="/admin/Citas" component={CitasScreen} />
              </CitasState>

              <Route path="/admin/home" component={HomeScreen} />

              <Route
                path="/admin/Contabilidad"
                component={ContabilidadScreen}
              ></Route>
            </HistoriasClinicasState>
          </PacientesState>
        </TratamientosState>
      </Switch>
    </>
  );
};

export default AdminRouter;
