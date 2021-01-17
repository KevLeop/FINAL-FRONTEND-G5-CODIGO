import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getCitas } from "../../../services/citasService";
require("moment/locale/es.js");
const localizer = momentLocalizer(moment);

const CitasCalendario = () => {
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

  const listaEventos = [
    {
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1),
    },
    {
      title: "Long Event",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    },

    {
      title: "DTS STARTS",
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
      title: "DTS ENDS",
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
      title: "Some Event",
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 9, 0, 0, 0),
    },
    {
      title: "Conference",
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: "Big conference for important people",
    },
    {
      title: "Meeting",
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "Lunch",
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      title: "Meeting",
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
      title: "Happy Hour",
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: "Most important meal of the day",
    },
    {
      title: "Dinner",
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
      title: "Birthday Party 1",
      // start: "2015-04-13T07:00:00-05:00",
      start: new Date(2015, 3, 13, 5, 30, 0),
      end: new Date(2015, 3, 13, 7, 30, 0),
    },
    {
      title: "Birthday Party 2",
      start: new Date(2015, 3, 13, 7, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
      title: "Birthday Party 3",
      start: new Date(2015, 3, 13, 7, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
      title: "Late Night Event",
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
      title: "Multi-day Event",
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0),
    },
  ];
  return (
    <div style={{ height: `${600}px` }} className="Calendar-container">
      <Calendar
        // step={60}
        localizer={localizer}
        events={eventosCalendario}
        startAccessor="start"
        endAccessor="end"
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />
    </div>
  );
};
export default CitasCalendario;
