import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
import { postTratamientos } from "../../../../../services/tratamientoService";

const TratamientoFormCrear = () => {
  const { obtenerTratamientos, setMostrarModal } = useContext(
    TratamientosContext
  );
  const formularioVacio = {
    nombre_tratamiento: "",
    descripcion: "",
  };

  const [formCrear, setFormCrear] = useState(formularioVacio);
  const handleChange = (e) => {
    setFormCrear({
      ...formCrear,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Seguro de crear paciente ${formCrear.nombre_tratamiento}`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        postTratamientos({
          ...formCrear,
        }).then((data) => {
          if (data.id_tratamiento) {
            setFormCrear(formularioVacio);
            obtenerTratamientos();
            Swal.fire({
              title: "Hecho!",
              text: "El tratamiento ha sido creado exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setMostrarModal(false);
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
        <label htmlFor="">Nombre del nuevo tratamiento:</label>
        <input
          className="form-control"
          type="text"
          name="nombre_tratamiento"
          value={formCrear.nombre_tratamiento}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Descripcion:</label>
        <input
          className="form-control"
          type="text"
          name="descripcion"
          value={formCrear.descripcion}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-success" type="submit">
          Crear Tratamiento
        </button>
      </div>
    </form>
  );
};

export default TratamientoFormCrear;
