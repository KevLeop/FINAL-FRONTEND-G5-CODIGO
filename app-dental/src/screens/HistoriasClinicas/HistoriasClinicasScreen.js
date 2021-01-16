import React, { useState,useContext } from "react";
import { Modal } from "react-bootstrap";
import HistoriasClinicasContext from "../../contexts/historiasClinicasContext";
import DetalleHClinica from "../HistoriasClinicas/components/DetalleHClinica";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";

const HistoriasClinicasScreen = () => {
  const [formCrear, setFormCrear] = useState(true);
  const {modalCrearHClinica, setModalCrearHClinica} = useContext(HistoriasClinicasContext);

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
          <Modal.Title>Crear Hclinica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetalleHClinica/>
        </Modal.Body>
      </Modal>
        <div className="col text-right">

          <button
            className="btn btn-info shadow"
            onClick={() => {
              setFormCrear(!formCrear);
            }}
          >
            Crear Hoja Clinica
          </button>

        </div>
      </div>
      <div className="row">
        <HistoriasClinicas />
        {formCrear && <DetalleHClinica />}
      </div>
    </main>
  );
};

export default HistoriasClinicasScreen;
