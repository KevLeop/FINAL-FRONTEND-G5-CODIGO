import React, { useState, useEffect } from "react";
import { getHistoriasClinicas } from "../services/historiasClinicasService";
import HistoriasClinicasContext from "./historiasClinicasContext";

const HistoriasClinicasState = ({ children }) => {
  const [modalCrearHClinica, setModalCrearHClinica] = useState(false);
  const [modalEditarHClinica, setModalEditarHClinica] = useState(false);
  const [hClinicas, setHClinicas] = useState([]);
  const [cargandoHClinicas, setCargandoHClinicas] = useState(true);
  const [hClinicasEditar, setHClinicaEditar] = useState({});
  const [detalleHC, setDetalleHC] = useState(false);
  const [objDetalleHC, setObjDetalleHC] = useState({});

  const obtenerHClinicas = () => {
    setCargandoHClinicas(true);
    getHistoriasClinicas().then((data) => {
      console.log(data);
      console.log("fromHclinicasState2");
      setHClinicas(data.content);
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
        setCargandoHClinicas: setCargandoHClinicas,
        obtenerHClinicas: obtenerHClinicas,
        modalCrearHClinica: modalCrearHClinica,
        setModalCrearHClinica: setModalCrearHClinica,
        modalEditarHClinica: modalEditarHClinica,
        setModalEditarHClinica: setModalEditarHClinica,
        hClinicasEditar: hClinicasEditar,
        setHClinicaEditar: setHClinicaEditar,
        detalleHC: detalleHC,
        setDetalleHC: setDetalleHC,
        objDetalleHC: objDetalleHC,
        setObjDetalleHC: setObjDetalleHC,
      }}
    >
      {children}
    </HistoriasClinicasContext.Provider>
  );
};

export default HistoriasClinicasState;
