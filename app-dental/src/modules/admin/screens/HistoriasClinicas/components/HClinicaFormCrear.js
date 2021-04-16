import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import HistoriasClinicasState from "../../../../../contexts/historiasClinicasState";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Moment from "moment";
import Swal from "sweetalert2";
import { posthClinica } from "../../../../../services/historiasClinicasService";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
const formularioVacio = {
  hclinicaFecha: "",
  paciente: "",
  tratamiento: "",
  hclinicaProblema: "",
  hclinicaDiagnostico: "",
  hclinicaPrecio: "",
  hclinicaPagado: false,
};

const HClinicaFormCrear = () => {
  const [formCrearHC, setFormCrearHC] = useState(formularioVacio);
  const { pacientes } = useContext(PacientesContext);
  const { tratamientos } = useContext(TratamientosContext);
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
          hclinicaFecha: Moment(formCrearHC.hclinicaFecha).format("YYYY-MM-DD"),
        }).then((data) => {
          console.log(data);
          if (data.success) {
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
    console.log(formCrearHC);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Fecha de la Historia Clínica:</label>
        <input
          className="form-control"
          type="date"
          name="hclinicaFecha"
          value={formCrearHC.hclinicaFecha}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> Elija el nombre del paciente: </label>
        <select
          className="form-control"
          name="paciente"
          onChange={handleChange}
        >
          <option disabled selected>
            --Seleccione Paciente--
          </option>
          {pacientes.map((pac) => {
            return (
              <option key={pac.pacienteDni} value={pac.pacienteDni}>
                {`${pac.pacienteNombre} ${pac.pacienteApellido}`}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label>Ingrese tratamiento:</label>
        <select
          className="form-control"
          name="tratamiento"
          onChange={handleChange}
        >
          <option disabled selected>
            --Seleccione Tratamiento--
          </option>
          {tratamientos.map((objTrat) => {
            return (
              <option key={objTrat.tratamientoId} value={objTrat.tratamientoId}>
                {objTrat.tratamientoNombre}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label>Ingrese Problema:</label>
        <input
          className="form-control"
          type="text"
          name="hclinicaProblema"
          value={formCrearHC.hclinicaProblema}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ingrese diagnóstico:</label>
        <input
          className="form-control"
          type="text"
          name="hclinicaDiagnostico"
          value={formCrearHC.hclinicaDiagnostico}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ingrese precio: </label>
        <input
          type="number"
          className="form-control"
          name="hclinicaPrecio"
          value={formCrearHC.hclinicaPrecio}
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
