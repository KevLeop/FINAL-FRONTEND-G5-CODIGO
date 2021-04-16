import React, { useState, useEffect } from "react";
import { getCitas } from "../services/citasService";
import CitasContext from "./citasContext";
import moment from "moment";
require("moment/locale/es.js");
// const localizer = momentLocalizer(moment);
const CitasState = ({ children }) => {
  const [modalCrearCita, setModalCrearCita] = useState(false);
  const [citas, setCitas] = useState({});
  const [cargandoCitas, setCargandoCitas] = useState(true);
  const [eventosCalendario, setEventosCalendario] = useState([]);
  let listaEventos2 = [];

  const obtenerCitas = () => {
    getCitas().then((data) => {
      console.log(data);
      setCitas(data.content);
      setCargandoCitas(false);
    });

    if (cargandoCitas === false) {
      citas.forEach((cita) => {
        let nuevo = new Object();
        nuevo.title = cita.citaTitulo;
        nuevo.allDay = false;
        nuevo.start = new Date(moment(cita.citaFechaInicio).format());
        nuevo.end = new Date(moment(cita.citaFechaFin).format());
        listaEventos2.push(nuevo);
      });
      setEventosCalendario(listaEventos2);
      console.log(listaEventos2);
    }
  };

  useEffect(() => {
    obtenerCitas();
  }, [cargandoCitas]);
  return (
    <CitasContext.Provider
      value={{
        modalCrearCita: modalCrearCita,
        setModalCrearCita: setModalCrearCita,
        eventosCalendario: eventosCalendario,
        cargandoCitas: cargandoCitas,
        setCargandoCitas: setCargandoCitas,
        obtenerCitas: obtenerCitas,
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export default CitasState;
