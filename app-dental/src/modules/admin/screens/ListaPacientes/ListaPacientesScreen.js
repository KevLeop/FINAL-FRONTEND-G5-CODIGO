import React, { useContext } from "react";
import PacientesContext from "../../../../contexts/pacientesContext";
import ListaPacienteDetalle from "./components/ListaPacienteDetalle";
import ListaPacientes from "./components/ListaPacientes";
import { Modal } from "react-bootstrap";
import PacienteFormCrear from "./components/PacienteFormCrear";
import PacienteFormEditar from "./components/PacienteFormEditar";
import CrearHCForm from "./components/CrearHCForm";

const ListaPacientesScreen = () => {
  const {
    pacienteDetalle,
    modalCrearPaciente,
    setmodalCrearPaciente,
    modalEditarPaciente,
    setModalEditarPaciente,
    modalCrearHC,
    setModalCrearHC,
  } = useContext(PacientesContext);

  return (
    <main className="container-fluid mt-4">
      <div className="row">
        <ListaPacientes />
        {pacienteDetalle && <ListaPacienteDetalle />}
      </div>

      <Modal
        show={modalCrearPaciente}
        onHide={() => {
          setmodalCrearPaciente(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crear Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PacienteFormCrear />
        </Modal.Body>
      </Modal>

      <Modal
        show={modalEditarPaciente}
        onHide={() => {
          setModalEditarPaciente(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PacienteFormEditar />
        </Modal.Body>
      </Modal>

      <Modal
        show={modalCrearHC}
        onHide={() => {
          setModalCrearHC(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crear Historia Clinica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrearHCForm />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default ListaPacientesScreen;
