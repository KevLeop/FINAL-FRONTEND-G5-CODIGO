import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import HistoriasClinicasContext from "../../../../contexts/historiasClinicasContext";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";
import DetalleHClinica from "./components/DetalleHClinica";
import HClinicaFormCrear from "./components/HClinicaFormCrear";
import HClinicaFormEditar from "./components/HClinicaFormEditar";

const HistoriasClinicasScreen = () => {
  // const [formCrear, setFormCrear] = useState(true);
  const {
    modalCrearHClinica,
    setModalCrearHClinica,
    detalleHC,
    modalEditarHClinica,
    setModalEditarHClinica,
  } = useContext(HistoriasClinicasContext);

  return (
    <main className="container-fluid mt-4">
      <div className="row">
        <HistoriasClinicas />
        {detalleHC && <DetalleHClinica />}
      </div>

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
    </main>
  );
};

export default HistoriasClinicasScreen;
