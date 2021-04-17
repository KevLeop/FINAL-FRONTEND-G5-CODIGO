import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import CitasContext from "../../../../../contexts/citasContext";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Moment from "moment";
import Swal from "sweetalert2";
import { postCitas } from "../../../../../services/citasService";

const formularioVacio = {
  paciente: "",
  citaTitulo: "",
  citaFechaInicio: "",
  citaFechaFin: "",
  citaEstado: "PEND",
};

const ModalCrearCita = () => {
  const [formCrearCita, setFormCrearCita] = useState(formularioVacio);

  const { pacientes } = useContext(PacientesContext);
  const { setModalCrearCita, obtenerCitas, setCargandoCitas } = useContext(
    CitasContext
  );

  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());

  const handleChange = (e) => {
    setFormCrearCita({
      ...formCrearCita,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFechaInicio = (e) => {
    console.log(`${Moment(e).format()}`);
    setFechaInicio(e);
    setFormCrearCita({
      ...formCrearCita,
      citaFechaInicio: Moment(e).format(),
    });
  };

  const handleChangeFechaFin = (e) => {
    console.log(`${Moment(e).format()}`);
    setFechaFin(e);
    setFormCrearCita({
      ...formCrearCita,
      citaFechaFin: Moment(e).format(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Seguro de crear evento ${formCrearCita.citaTitulo}`,
      icon: "question",
      text: "Los cambios se guardarán en la Base de Datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        postCitas(formCrearCita).then((data) => {
          console.log(data);
          if (data.success === true) {
            setFormCrearCita(formularioVacio);
            setCargandoCitas(true);
            obtenerCitas();
            Swal.fire({
              title: "Hecho!",
              text: "La cita ha sido creada exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setModalCrearCita(false);
          } else {
            Swal.fire({
              title: "Error!",
              text: "No se pudo registrar cita",
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
        <label>Seleccione paciente:</label>
        <select
          name="paciente"
          id="pacienteDni"
          className="form-control"
          onChange={handleChange}
        >
          <option selected disabled>
            --Seleccione paciente
          </option>
          {pacientes.map((pac) => {
            if (pac.pacienteEstado) {
              return (
                <option
                  key={pac.pacienteDni}
                  value={pac.pacienteDni}
                >{`${pac.pacienteNombre} ${pac.pacienteApellido}`}</option>
              );
            }
          })}
        </select>
      </div>

      <div className="form-group">
        <label>
          <strong>Título:</strong>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese titulo de la cita"
          name="citaTitulo"
          value={formCrearCita.citaTitulo}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label> Fecha y Hora de inicio: </label>
            <DateTimePicker
              value={fechaInicio}
              onChange={handleChangeFechaInicio}
              name="citaFechaInicio"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label> Fecha y Hora de fin: </label>
            <DateTimePicker
              value={fechaFin}
              onChange={handleChangeFechaFin}
              name="citaFechaFin"
            />
          </div>
        </div>
      </div>
      <div className="form group text-center">
        <button className="btn btn-success">Crear cita</button>
      </div>
    </form>
  );
};

export default ModalCrearCita;
