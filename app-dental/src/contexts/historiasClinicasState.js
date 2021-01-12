import React, { useState, useEffect } from "react";
import { getHistoriasClinicas } from "../services/historiasClinicasService";
import HistoriasClinicasContext from "./historiasClinicasContext";

const HistoriasClinicasState = ({ children }) => {
  const [hClinicas, setHClinicas] = useState([]);
  const [cargandoHClinicas, setCargandoHClinicas] = useState(true);

  const obtenerHClinicas = () => {
    setCargandoHClinicas(true);
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
