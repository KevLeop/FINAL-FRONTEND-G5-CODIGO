import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CitasContext from "../../../../../contexts/citasContext";
require("moment/locale/es.js");
const localizer = momentLocalizer(moment);

const CitasCalendario = () => {
  const { eventosCalendario, cargandoCitas } = useContext(CitasContext);

  return (
    <main className="container-fluid">
      {cargandoCitas ? (
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-title text-center mt-3">
                <h4>Cargando Calendario de citas</h4>
              </div>
              <div className="card-body text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <div className="card shadow ">
              <div
                style={{ height: `${600}px` }}
                className="Calendar-container"
              >
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
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default CitasCalendario;
