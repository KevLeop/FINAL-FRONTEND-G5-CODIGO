import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Moment from "moment";
import "moment/min/locales";
Moment.locale("es");
const DetalleHClinica = () => {
  const formularioVacio = {
    id_paciente: 0,
    fecha: "",
    problema: "",
    diagnostico: "",
    tratamiento: "",
    pagado: false,
  };

  const [formulario, setFormulario] = useState(formularioVacio);
  const { pacientes, cargandoPacientes } = useContext(PacientesContext);
  const {
    obtenerHClinicas,
    setModalCrearHClinica,
    objDetalleHC,
    setObjDetalleHC,
  } = useContext(HistoriasClinicasContext);

  const imagenPaciente = (id_pacienteHC) => {
    const paciente = pacientes.find(
      (pac) => +pac.id_paciente === +id_pacienteHC
    );
    return paciente ? paciente.paciente_img : "https://via.placeholder.com/150";
  };

  const nombrePaciente = (idPacHC) => {
    const pac = pacientes.find((pac) => +pac.id_paciente === +idPacHC);
    return pac ? `${pac.nombre} ${pac.apellido}` : "S/N";
  };

  const handleChangePagado = (e) => {
    if (e.target.value === false) {
      setObjDetalleHC({
        ...objDetalleHC,
        pagado: true,
      });
    } else {
      setObjDetalleHC({
        ...objDetalleHC,
        pagado: false,
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
              src={imagenPaciente(objDetalleHC.id_paciente)}
              alt=""
              width="150"
            />
          </figure>
          <legend>
            <div className="form-group">
              <strong>Nombres y Apellidos del Paciente:</strong>
              <br />
              <p>{nombrePaciente(objDetalleHC.id_paciente)}</p>
            </div>
            <div className="form-group">
              <strong>Fecha de Historia Clinica</strong>
              <br />
              <p>{Moment(objDetalleHC.fecha).format("LL")}</p>
            </div>
            <div className="form-group">
              <strong>Problema</strong>
              <br />
              <p>{objDetalleHC.problema}</p>
            </div>
            <div className="form-group">
              <strong>Tratamiento</strong>
              <br />
              <p>{objDetalleHC.tratamiento}</p>
            </div>
            <div className="form-group">
              <strong>Diagnostico</strong>
              <br />
              <p>{objDetalleHC.diagnostico}</p>
            </div>
            <div className="form-group">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  name="pagado"
                  value={objDetalleHC.pagado}
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
