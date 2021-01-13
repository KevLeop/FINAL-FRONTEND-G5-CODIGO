import React, { useState, useEffect } from "react";
import { getPacientes } from "../services/pacientesService";
import PacientesContext from "./pacientesContext";

const PacientesState = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [cargandoPacientes, setCargandoPacientes] = useState(true);
  const [pacienteDetalle, setPacienteDetalle] = useState(false);
  const [objDetallePaciente, setObjDetallePaciente] = useState({
    nombre: "",
    apellido: "",
    fechadenacimiento: "",
    telefono: "",
    sexo: "",
  });
  const [modalCrearPaciente, setmodalCrearPaciente] = useState(false);

  const [modalEditarPaciente, setModalEditarPaciente] = useState(false);
  const [modalCrearHC, setModalCrearHC] = useState(false);
  const [pacienteEditar, setPacienteEditar] = useState({});

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
        pacienteDetalle: pacienteDetalle,
        setPacienteDetalle: setPacienteDetalle,
        objDetallePaciente: objDetallePaciente,
        setObjDetallePaciente: setObjDetallePaciente,
        modalCrearPaciente: modalCrearPaciente,
        setmodalCrearPaciente: setmodalCrearPaciente,
        modalEditarPaciente: modalEditarPaciente,
        setModalEditarPaciente: setModalEditarPaciente,
        pacienteEditar: pacienteEditar,
        setPacienteEditar: setPacienteEditar,
        modalCrearHC: modalCrearHC,
        setModalCrearHC: setModalCrearHC,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesState;
