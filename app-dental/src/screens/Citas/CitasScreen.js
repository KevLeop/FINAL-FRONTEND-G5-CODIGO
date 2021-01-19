import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import CitasContext from "../../contexts/citasContext";

import CitasCalendario from "./components/CitasCalendario";
import ModalCrearCita from "./components/ModalCrearCita";

const CitasScreen = () => {
  const { modalCrearCita, setModalCrearCita } = useContext(CitasContext);

  return (
    <main className="container-fluid">
      <div className="row d-flex justify-content-between px-5 pt-2">
        <h2 className="h2">Calendario de citas</h2>
        <button
          className="btn btn-success mx-0 py-0"
          onClick={() => {
            setModalCrearCita(true);
          }}
        >
          <p className="my-0 py-0">Agregar cita</p>
        </button>
      </div>
      <div className="row">
        <div className="col">
          <CitasCalendario />
          <div className="text-right"></div>
          <Modal
            show={modalCrearCita}
            onHide={() => {
              setModalCrearCita(false);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Crear cita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModalCrearCita />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </main>
  );
};

export default CitasScreen;
