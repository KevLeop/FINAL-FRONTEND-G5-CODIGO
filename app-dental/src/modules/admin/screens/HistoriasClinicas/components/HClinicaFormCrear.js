import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import HistoriasClinicasState from "../../../../../contexts/historiasClinicasState";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Moment from "moment";
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

const HClinicaFormCrear = () => {
  const [formCrearHC, setFormCrearHC] = useState(formularioVacio);
  const { pacientes } = useContext(PacientesContext);
  const {
    setModalCrearHClinica,
    setCargandoHClinicas,
    obtenerHClinicas,
  } = useContext(HistoriasClinicasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Seguro que deseas crear la Historia Clinica`,
      icon: "question",
      text: "Los cambios se guardarán en la Base de Datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        posthClinica({
          ...formCrearHC,
          fecha: Moment(formCrearHC.fecha).format(),
        }).then((data) => {
          if (data.id_hclinica) {
            setFormCrearHC(formularioVacio);
            setCargandoHClinicas(true);
            obtenerHClinicas();
            Swal.fire({
              title: "Hecho!",
              text: "La Historia Clinica ha sido creada exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setModalCrearHClinica(false);
          } else {
            Swal.fire({
              title: "Error!",
              text: "No se pudo registrar Historia Clinica",
              icon: "error",
              showCancelButton: false,
              timer: 800,
            });
          }
        });
      }
    });
  };

  const handleChange = (e) => {
    setFormCrearHC({
      ...formCrearHC,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Fecha de la Historia Clínica:</label>
        <input
          className="form-control"
          type="date"
          name="fecha"
          value={formCrearHC.fecha}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> Elija el nombre del paciente: </label>
        <select
          className="form-control"
          name="id_paciente"
          onChange={handleChange}
        >
          <option disabled selected>
            --Seleccione Paciente--
          </option>
          {pacientes.map((pac) => {
            return (
              <option key={pac.id_paciente} value={pac.id_paciente}>
                {`${pac.nombre} ${pac.apellido}`}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label>Ingrese tratamiento:</label>
        <input
          className="form-control"
          type="text"
          name="tratamiento"
          value={formCrearHC.tratamiento}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ingrese Problema:</label>
        <input
          className="form-control"
          type="text"
          name="problema"
          value={formCrearHC.problema}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ingrese diagnóstico:</label>
        <input
          className="form-control"
          type="text"
          name="diagnostico"
          value={formCrearHC.diagnostico}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Crear
        </button>
      </div>
    </form>
  );
};

export default HClinicaFormCrear;
