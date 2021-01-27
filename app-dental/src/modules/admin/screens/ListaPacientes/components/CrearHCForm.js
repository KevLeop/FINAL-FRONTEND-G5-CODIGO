import React, { useContext, useState } from "react";
import PacientesContext from "../../../../../contexts/pacientesContext";
import moment from "moment";
import Swal from "sweetalert2";
import { posthClinica } from "../../../../../services/historiasClinicasService";

const formularioVacio = {
  fecha: "",
  id_paciente: "",
  tratamiento: "",
  problema: "",
  diagnostico: "",
  pagado: false,
};

const CrearHCForm = () => {
  const { objDetallePaciente, setModalCrearHC, pacientes } = useContext(
    PacientesContext
  );
  const [formCrearHCPacientes, setFormCrearHCPacientes] = useState({
    ...formularioVacio,
    id_paciente: objDetallePaciente.id_paciente,
    fecha: moment().format("YYYY-MM-DD"),
  });

  const handleChange = (e) => {
    setFormCrearHCPacientes({
      ...formCrearHCPacientes,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormCrearHCPacientes({
      ...formCrearHCPacientes,
      fecha: e.target[0].value,
      id_paciente: objDetallePaciente.id_paciente,
    });
    console.log(formCrearHCPacientes);
    Swal.fire({
      title: `Seguro de crear Historia Clinica para el paciente ${objDetallePaciente.nombre} ${objDetallePaciente.apellido}`,
      icon: "question",
      text: "Los cambios se guardarán en la Base de Datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        console.log(formCrearHCPacientes);
        posthClinica(formCrearHCPacientes).then((data) => {
          if (data.id_hclinica) {
            setFormCrearHCPacientes(formularioVacio);
            Swal.fire({
              title: "Hecho!",
              text: "Historia clinica creada exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setModalCrearHC(false);
          } else {
            Swal.fire({
              title: "Error!",
              text: "No se pudo registrar la historia clinica",
              icon: "error",
              showCancelButton: false,
              time: 800,
            });
          }
        });
      } else {
        console.log(formCrearHCPacientes);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fecha">Fecha:</label>
        <input
          className="form-control"
          type="date"
          name="fecha"
          value={formCrearHCPacientes.fecha}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Nombre del paciente:</label>
        <input
          className="form-control"
          type="text"
          name="id_paciente"
          value={`${objDetallePaciente.nombre} ${objDetallePaciente.apellido}`}
          onChange={handleChange}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Tratamiento</label>
        <input
          className="form-control"
          type="text"
          name="tratamiento"
          value={formCrearHCPacientes.tratamiento}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Problema: </label>
        <input
          className="form-control"
          type="text"
          name="problema"
          value={formCrearHCPacientes.problema}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Diagnostico: </label>
        <input
          className="form-control"
          type="text"
          name="diagnostico"
          value={formCrearHCPacientes.diagnostico}
          onChange={handleChange}
        />
      </div>
      <div className="form-group text-center">
        <button className="btn btn-info btn-lg" type="submit">
          Crear Historia Clinica
        </button>
      </div>
    </form>
  );
};

export default CrearHCForm;
