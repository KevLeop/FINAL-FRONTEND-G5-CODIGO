import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
import { postTratamientos } from "../../../../../services/tratamientoService";

const TratamientoFormCrear = () => {
  const { obtenerTratamientos, setMostrarModal } = useContext(
    TratamientosContext
  );
  const formularioVacio = {
    tratamientoNombre: "",
    tratamientoDescripcion: "",
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
      title: `Seguro de crear paciente ${formCrear.tratamientoNombre}`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        postTratamientos({
          ...formCrear,
        }).then((data) => {
          console.log("Dataaaaaaaaaaaaaaaaaa");
          console.log(data);
          if (data.success === true) {
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
          name="tratamientoNombre"
          value={formCrear.tratamientoNombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Descripcion:</label>
        <input
          className="form-control"
          type="text"
          name="tratamientoDescripcion"
          value={formCrear.tratamientoDescripcion}
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
