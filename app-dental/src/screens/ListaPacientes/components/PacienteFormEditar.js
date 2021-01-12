import React, { useState } from "react";
import Swal from "sweetalert2";

const formularioVacio = {
  nombre: "",
  apellido: "",
  fechadenacimiento: "",
  telefono: "",
  sexo: "",
};

const PacienteFormEditar = () => {
  const [formEditar, setFormEditar] = useState({
    nombre: "",
    apellido: "",
    fechadenacimiento: "",
    telefono: "",
    sexo: "",
  });
  const handleChange = (e) => {
    setFormEditar({
      ...formEditar,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de editar paciente",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: "true",
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
          value={formEditar.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Apellidos del paciente"
          name="apellido"
          value={formEditar.apellido}
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
            value={formEditar.fechadenacimiento}
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
          value={formEditar.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese género"
          name="sexo"
          value={formEditar.sexo}
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

export default PacienteFormEditar;
