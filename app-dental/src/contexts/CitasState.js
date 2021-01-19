import React, { useState, useEffect } from "react";
import { getCitas } from "../services/citasService";
import { Calendar, momentLocalizer } from "react-big-calendar";
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
      setCitas(data);
      setCargandoCitas(false);

      console.log(new Date(moment("2021-01-17T02:07:49-05:00")));
      console.log(new Date(2015, 3, 1));
    });

    if (cargandoCitas === false) {
      console.log("lista2");
      console.log(listaEventos2);
      citas.forEach((cita) => {
        let nuevo = new Object();
        nuevo.title = cita.titulo;
        nuevo.allDay = false;
        nuevo.start = new Date(moment(cita.fechahora_inicio).format());
        nuevo.end = new Date(moment(cita.fechahora_fin).format());
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
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export default CitasState;
