import React, { useState, useEffect, useContext } from "react";
import { getHistoriasClinicas } from "../services/historiasClinicasService";
import { getPacientes } from "../services/pacientesService";
import HistoriasClinicasContext from "./historiasClinicasContext";
import PacientesContext from "./pacientesContext";

const HistoriasClinicasState = ({ children }) => {
  const { setPacientes, setCargandoPacientes } = useContext(PacientesContext);

  const [hClinicas, setHClinicas] = useState([]);
  const [cargandoHClinicas, setCargandoHClinicas] = useState(true);

  const obtenerHClinicas = () => {
    getHistoriasClinicas().then((data) => {
      console.log(data);
      console.log("fromHclinicasState2");
      setHClinicas(data);
      setCargandoHClinicas(false);
    });
  };

  useEffect(() => {
    obtenerHClinicas();
  }, []);

  return (
    <HistoriasClinicasContext.Provider
      value={{
        hClinicas: hClinicas,
        cargandoHClinicas: cargandoHClinicas,
        obtenerHClinicas: obtenerHClinicas,
      }}
    >
      {children}
    </HistoriasClinicasContext.Provider>
  );
};

export default HistoriasClinicasState;
