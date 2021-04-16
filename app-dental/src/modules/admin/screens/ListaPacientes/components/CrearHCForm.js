import React, { useContext, useState } from "react";
import PacientesContext from "../../../../../contexts/pacientesContext";
import moment from "moment";
import Swal from "sweetalert2";
import { posthClinica } from "../../../../../services/historiasClinicasService";
import TratamientosContext from "../../../../../contexts/tratamientosContext";

const formularioVacio = {
  hclinicaFecha: "",
  paciente: "",
  tratamiento: "",
  hclinicaProblema: "",
  hclinicaDiagnostico: "",
  hclinicaPagado: false,
  hclinicaPrecio: 0,
};

const CrearHCForm = () => {
  const { tratamientos } = useContext(TratamientosContext);
  const { objDetallePaciente, setModalCrearHC, pacientes } = useContext(
    PacientesContext
  );
  const [formCrearHCPacientes, setFormCrearHCPacientes] = useState({
    ...formularioVacio,
    paciente: objDetallePaciente.pacienteDni,
    hclinicaFecha: moment().format("YYYY-MM-DD"),
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
      hclinicaFecha: e.target[0].value,
      paciente: objDetallePaciente.pacienteDni,
    });
    console.log(formCrearHCPacientes);
    Swal.fire({
      title: `Seguro de crear Historia Clinica para el paciente ${objDetallePaciente.pacienteNombre} ${objDetallePaciente.pacienteApellido}`,
      icon: "question",
      text: "Los cambios se guardarán en la Base de Datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        console.log(formCrearHCPacientes);
        posthClinica(formCrearHCPacientes).then((data) => {
          console.log(data);
          if (data.success) {
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
          name="hclinicaFecha"
          value={formCrearHCPacientes.hclinicaFecha}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Nombre del paciente:</label>
        <input
          className="form-control"
          type="text"
          name="paciente"
          value={`${objDetallePaciente.pacienteNombre} ${objDetallePaciente.pacienteApellido}`}
          onChange={handleChange}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Tratamiento</label>
        <select
          className="form-control"
          name="tratamiento"
          onChange={handleChange}
        >
          <option disabled selected>
            --Seleccione Tratamiento--
          </option>
          {tratamientos.map((objTrat) => {
            if (objTrat.tratamientoEstado) {
              return (
                <option
                  key={objTrat.tratamiendoId}
                  value={objTrat.tratamientoId}
                >
                  {objTrat.tratamientoNombre}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="">Problema: </label>
        <input
          className="form-control"
          type="text"
          name="hclinicaProblema"
          value={formCrearHCPacientes.hclinicaProblema}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Diagnostico: </label>
        <input
          className="form-control"
          type="text"
          name="hclinicaDiagnostico"
          value={formCrearHCPacientes.hclinicaDiagnostico}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="number"
          placeholder="Ingrese precio"
          name="hclinicaPrecio"
          value={formCrearHCPacientes.hclinicaPrecio}
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
