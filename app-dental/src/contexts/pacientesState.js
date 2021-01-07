import React, { useState, useEffect } from "react";
import { getPacientes } from "../services/pacientesService";
import PacientesContext from "./pacientesContext";

const PacientesState = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [cargandoPacientes, setCargandoPacientes] = useState(true);

  const obtenerPacientes = () => {
    setCargandoPacientes(true);
    getPacientes().then((data) => {
      setPacientes(data);
      setCargandoPacientes(false);
    });
  };

  useEffect(() => {
    obtenerPacientes();
  }, []);

  return (
    <PacientesContext.Provider
      value={{
        pacientes: pacientes,
        cargandoPacientes: cargandoPacientes,
        obtenerPacientes: obtenerPacientes,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesState;
