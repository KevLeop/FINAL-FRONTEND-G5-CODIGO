import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import CitasContext from "../../../contexts/citasContext";
import PacientesContext from "../../../contexts/pacientesContext";

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
  const { setModalCrearCita } = useContext(CitasContext);

  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());

  const handleChange = (e) => {
    setFormCrearCita({
      ...formCrearCita,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFechaInicio = () => {};

  return (
    <form>
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
      <div className="form-group">
        <label>Seleccione paciente:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Nombres del paciente"
          name="id_paciente"
          value={formCrearCita.id_paciente}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label> Fecha y Hora de inicio: </label>
            <DateTimePicker
              value={fechaInicio}
              onChange={(e) => {
                setFechaInicio(e.target.value);
                setFormCrearCita({
                  ...formCrearCita,
                  fechahora_inicio: fechaInicio,
                });
              }}
              name="fechahora_inicio"
              // value={formCrearCita.fechahora_inicio}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label> Fecha y Hora de fin: </label>
            <DateTimePicker
              value={fechaFin}
              onChange={setFechaFin}
              name="fechahora_fin"
              // value={formCrearCita.fechahora_fin}
              // onChange={handleChange}
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
