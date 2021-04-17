import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Moment from "moment";
import "moment/min/locales";

import { URL_BACKEND } from "../../../../../environments/environments";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
Moment.locale("es");
const DetalleHClinica = () => {
  const { pacientes, cargandoPacientes } = useContext(PacientesContext);
  const {
    obtenerHClinicas,
    setModalCrearHClinica,
    objDetalleHC,
    setObjDetalleHC,
  } = useContext(HistoriasClinicasContext);

  const { tratamientos } = useContext(TratamientosContext);

  const imagenPaciente = (id_pacienteHC) => {
    const paciente = pacientes.find(
      (pac) => +pac.pacienteDni === +id_pacienteHC
    );
    return paciente
      ? `${URL_BACKEND}/paciente.pacienteImagen`
      : "https://via.placeholder.com/150";
  };

  const nombrePaciente = (idPacHC) => {
    const pacienteEncontrado = pacientes.find(
      (pac) => +pac.pacienteDni == +idPacHC
    );
    return pacienteEncontrado
      ? `${pacienteEncontrado.pacienteNombre} ${pacienteEncontrado.pacienteApellido}`
      : "S/N";
  };

  const nombreTratamiento = (idTratHC) => {
    const tratamientoEncontrado = tratamientos.find(
      (trat) => +trat.tratamientoId === +idTratHC
    );
    return tratamientoEncontrado
      ? tratamientoEncontrado.tratamientoNombre
      : "S/N";
  };

  const handleChangePagado = (e) => {
    if (e.target.value === false) {
      setObjDetalleHC({
        ...objDetalleHC,
        hclinicaPagado: true,
      });
    } else {
      setObjDetalleHC({
        ...objDetalleHC,
        hclinicaPagado: false,
      });
    }
  };

  return (
    <section className="col-md-3">
      <div className="card shadow animate__animated animate__fadeInRight">
        <div className="card-title text-center mt-3">
          <h4>
            <strong>Detalle de Historia Clinica</strong>
          </h4>
        </div>
        <div className="card-body">
          <figure className="text-center">
            <img
              className="rounded-circle"
              src={imagenPaciente(objDetalleHC.paciente)}
              alt=""
              width="150"
            />
          </figure>
          <legend>
            <div className="form-group">
              <strong>Nombres y Apellidos del Paciente:</strong>
              <br />
              <p>{objDetalleHC.paciente}</p>
            </div>
            <div className="form-group">
              <strong>Fecha de Historia Clinica</strong>
              <br />
              <p>{Moment(objDetalleHC.hclinicaFecha).format("LL")}</p>
            </div>
            <div className="form-group">
              <strong>Problema</strong>
              <br />
              <p>{objDetalleHC.hclinicaProblema}</p>
            </div>
            <div className="form-group">
              <strong>Tratamiento</strong>
              <br />
              <p>{nombreTratamiento(objDetalleHC.tratamiento)}</p>
            </div>
            <div className="form-group">
              <strong>Diagnostico</strong>
              <br />
              <p>{objDetalleHC.hclinicaDiagnostico}</p>
            </div>
            <div className="form-group">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  name="pagado"
                  value={objDetalleHC.hclinicaPagado}
                  onChange={handleChangePagado}
                />
                <label class="custom-control-label" for="customSwitch1">
                  Pago Realizado
                </label>
              </div>
            </div>
          </legend>
        </div>
      </div>
    </section>
  );
};

export default DetalleHClinica;
