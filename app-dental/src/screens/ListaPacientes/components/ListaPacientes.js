import React, { useContext } from "react";
import PacientesContext from "../../../contexts/pacientesContext";
import Swal from "sweetalert2";
import Moment from "moment";
import { deletePaciente } from "../../../services/pacientesService";
// Moment.locale("es");
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

  const eliminar = (paciente_id) => {
    Swal.fire({
      title: "¿Seguro de eliminar paciente?",
      icon: "error",
      text: "Los cambios serán irreversibles",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        setPacienteDetalle(false);
        deletePaciente(paciente_id).then((data) => {
          if (data.id_paciente) {
            obtenerPacientes();
            setPacienteDetalle(false);
            Swal.fire({
              title: "Eliminado",
              icon: "success",
              timer: 800,
              showCancelButton: false,
              position: "top-center",
            });
          }
        });
      }
    });
  };

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
            <div className="row ">
              <div className="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar pacientes..."
                    aria-label="Buscar pacientes"
                  />
                </div>
              </div>

              <div className="col text-right">
                <button
                  className="btn btn-success rounded-circle mx-1"
                  onClick={() => {
                    obtenerPacientes();
                    setPacienteDetalle(false);
                  }}
                >
                  <i className="fa fa-refresh" aria-hidden="true"></i>
                  {/**Boton refresh */}
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
                        <td>
                          {Moment(objPaciente.fechadenacimiento).format("LL")}
                        </td>
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
                                fechadenacimiento: Moment(
                                  objPaciente.fechadenacimiento
                                ).format("LL"),

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

                          <button
                            className="btn px-0 py-0 ml-1"
                            onClick={() => {
                              setPacienteEditar(objPaciente);
                              setModalEditarPaciente(true);
                            }}
                          >
                            <i
                              class="fa fa-pencil-square fa-lg"
                              aria-hidden="true"
                            ></i>
                          </button>
                          <button
                            className="btn rounded-circle px-0 py-0 ml-1"
                            onClick={() => {
                              eliminar(objPaciente.id_paciente);
                            }}
                          >
                            <i
                              className="fa fa-minus-circle fa-lg" // boton eliminar
                              aria-hidden="true"
                            ></i>
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
