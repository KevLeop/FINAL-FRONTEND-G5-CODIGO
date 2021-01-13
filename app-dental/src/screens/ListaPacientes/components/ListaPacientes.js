import React, { useContext } from "react";
import PacientesContext from "../../../contexts/pacientesContext";

const ListaPacientes = () => {
  const {
    pacientes,
    cargandoPacientes,
    obtenerPacientes,
    // pacienteDetalle,
    setPacienteDetalle,
    setObjDetallePaciente,
    // objDetallePaciente,
    // modalCrearPaciente,
    setmodalCrearPaciente,
    modalEditarPaciente,
    setModalEditarPaciente,
    pacienteEditar,
    setPacienteEditar,
  } = useContext(PacientesContext);

  console.log(pacientes);
  console.log("fromListaPacientes2");
  return (
    <section className="col-md-9">
      {cargandoPacientes ? (
        <div className="card shadow">
          <div className="card-title text-center mt-3">
            <h4>Cargando Listado de Pacientes</h4>
          </div>
          <div className="card-body text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow">
          <div className="card-title text-center mt-3">
            <h3>Listado de Pacientes</h3>
          </div>
          <div className="card-body ">
            <div className="text-right mb-2">
              <button
                className="btn btn-success mx-1"
                onClick={() => {
                  obtenerPacientes();
                  setPacienteDetalle(false);
                }}
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
                {/*boton info*/}
                refresh
              </button>
              <button
                className="btn btn-success rounded-circle mx-1"
                onClick={() => {
                  setmodalCrearPaciente(true);
                }}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
                {/*boton (+) */}
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Telefono</th>
                    <th>Sexo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pacientes.map((objPaciente) => {
                    return (
                      <tr key={objPaciente.id_paciente}>
                        <td>{objPaciente.id_paciente}</td>

                        <td>{objPaciente.nombre}</td>
                        <td>{objPaciente.apellido}</td>
                        <td>{objPaciente.fechadenacimiento}</td>
                        <td>{objPaciente.telefono}</td>
                        <td>{objPaciente.sexo}</td>
                        <td>
                          <button
                            className="btn rounded-circle fa-lg px-0 py-0 ml-1"
                            onClick={(e) => {
                              setPacienteDetalle(true);
                              setObjDetallePaciente({ 
                                nombre: objPaciente.nombre,
                                apellido: objPaciente.apellido,
                                fechadenacimiento:
                                  objPaciente.fechadenacimiento,
                                telefono: objPaciente.telefono,
                                sexo: objPaciente.sexo,
                              });
                            }}
                          >
                            <i
                              className="fa fa-info-circle fa-sm" // boton info
                              aria-hidden="true"
                            ></i>
                          </button>
                          <button className="btn rounded-circle px-0 py-0 ml-1">
                            <i
                              className="fa fa-minus-circle fa-lg" // boton eliminar
                              aria-hidden="true"
                            ></i>
                          </button>
                          <button
                            className="btn btn-secondary px-1 py-0 ml-1"
                            onClick={() => {
                              setPacienteEditar(objPaciente);
                              setModalEditarPaciente(true);
                            }}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ListaPacientes;
