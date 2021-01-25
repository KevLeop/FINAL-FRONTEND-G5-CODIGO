import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import HistoriasClinicasContext from "../../contexts/historiasClinicasContext";
import DetalleHClinica from "../HistoriasClinicas/components/DetalleHClinica";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";
import HClinicaFormCrear from "./components/HClinicaFormCrear";
import HClinicaFormEditar from "./components/HClinicaFormEditar";

const HistoriasClinicasScreen = () => {
  const [formCrear, setFormCrear] = useState(true);
  const {
    modalCrearHClinica,
    setModalCrearHClinica,

    modalEditarHClinica,
    setModalEditarHClinica,
  } = useContext(HistoriasClinicasContext);

  return (
    <main className="container-fluid mt-4">
      <div className="row mb-4">
        <Modal
          show={modalCrearHClinica}
          onHide={() => {
            setModalCrearHClinica(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Crear Historia Clinica</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <HClinicaFormCrear />
          </Modal.Body>
        </Modal>

        <Modal
          show={modalEditarHClinica}
          onHide={() => {
            setModalEditarHClinica(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <HClinicaFormEditar />
          </Modal.Body>
        </Modal>
      </div>
      <div className="row">
        <HistoriasClinicas />
      </div>
    </main>
  );
};

export default HistoriasClinicasScreen;
