import React, { useContext } from "react";
import PacientesContext from "../../contexts/pacientesContext";
import ListaPacienteDetalle from "../ListaPacientes/components/ListaPacienteDetalle";
import ListaPacientes from "../ListaPacientes/components/ListaPacientes";
import { Modal } from "react-bootstrap";
import PacienteFormCrear from "./components/PacienteFormCrear";

const ListaPacientesScreen = () => {
  const {
    pacienteDetalle,
    modalCrearPaciente,
    setmodalCrearPaciente,
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
    </main>
  );
};

export default ListaPacientesScreen;
