import React, { useContext, useState } from "react";
import PacientesContext from "../../../contexts/pacientesContext";
import Swal from "sweetalert2";

import { postPacientes } from "../../../services/pacientesService";

const formularioVacio = {
  nombre: "",
  apellido: "",
  fechadenacimiento: "",
  telefono: "",
  sexo: "",
};

const PacienteFormCrear = () => {
  const {
    obtenerPacientes,
    setmodalCrearPaciente,
    // modalCrearPaciente,
  } = useContext(PacientesContext);
  const [formCrear, setFormCrear] = useState({
    nombre: "",
    apellido: "",
    fechadenacimiento: "",
    telefono: "",
    sexo: "",
  });

  const handleChange = (e) => {
    setFormCrear({
      ...formCrear,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Seguro de crear paciente ${formCrear.nombre} ${formCrear.apellido}`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        postPacientes(formCrear).then((data) => {
          if (data.id_paciente) {
            setFormCrear(formularioVacio);
            obtenerPacientes();
            Swal.fire({
              title: "Hecho!",
              text: "El paciente ha sido creado exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setmodalCrearPaciente(false);
          } else {
            Swal.fire({
              title: "Error!",
              text: "No se pudo registrar paciente",
              icon: "error",
              showCancelButton: false,
              timer: 800,
            });
          }
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Nombres del paciente"
          name="nombre"
          value={formCrear.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Apellidos del paciente"
          name="apellido"
          value={formCrear.apellido}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="form-control input-group">
          <label htmlFor="fechadenacimiento">Fecha de Nacimiento:</label>
          <input
            className="custom-date"
            type="date"
            id="fechadenacimiento"
            name="fechadenacimiento"
            value={formCrear.fechadenacimiento}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Teléfono"
          name="telefono"
          value={formCrear.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese género"
          name="sexo"
          value={formCrear.sexo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group d-flex justify-content-between">
        <button className="btn btn-primary" type="submit">
          Crear
        </button>
        {/* <button
          className="btn btn-danger"
          onClick={() => {
            setmodalCrearPaciente(false);
          }}
        >
          Cancelar
        </button> */}
      </div>
    </form>
  );
};

export default PacienteFormCrear;