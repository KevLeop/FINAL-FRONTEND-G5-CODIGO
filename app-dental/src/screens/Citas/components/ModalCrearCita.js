import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import CitasContext from "../../../contexts/citasContext";
import PacientesContext from "../../../contexts/pacientesContext";
import Moment from "moment";
import Swal from "sweetalert2";
import { postCitas } from "../../../services/citasService";

const formularioVacio = {
  id_paciente: "",
  titulo: "",
  fechahora_inicio: "",
  fechahora_fin: "",
  estado: "pendiente",
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
      fechahora_inicio: Moment(e).format(),
    });
  };

  const handleChangeFechaFin = (e) => {
    console.log(`${Moment(e).format()}`);
    setFechaFin(e);
    setFormCrearCita({
      ...formCrearCita,
      fechahora_fin: Moment(e).format(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Seguro de crear evento ${formCrearCita.titulo}`,
      icon: "question",
      text: "Los cambios se guardarán en la Base de Datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        postCitas(formCrearCita).then((data) => {
          if (data.id_paciente) {
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
          name="id_paciente"
          id="id_paciente"
          className="form-control"
          onChange={handleChange}
        >
          <option selected disabled>
            --Seleccione paciente
          </option>
          {pacientes.map((pac) => {
            return (
              <option
                key={pac.id_paciente}
                value={pac.id_paciente}
              >{`${pac.nombre} ${pac.apellido}`}</option>
            );
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
          name="titulo"
          value={formCrearCita.titulo}
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
              name="fechahora_inicio"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label> Fecha y Hora de fin: </label>
            <DateTimePicker
              value={fechaFin}
              onChange={handleChangeFechaFin}
              name="fechahora_fin"
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
