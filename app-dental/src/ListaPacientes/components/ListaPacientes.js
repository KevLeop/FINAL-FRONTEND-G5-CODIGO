import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PacientesContext from "../../contexts/pacientesContext";

const ListaPacientes = () => {
  const { pacientes, cargandoPacientes, obtenerPacientes } = useContext(
    PacientesContext
  );
  console.log(pacientes);
  console.log("fromListaPacientes2");
  return (
    <section className="col-md-8 mt-3">
      <div className="card shadow">
        <div className="card-title text-center mt-3">
          <h3>Listado de Pacientes</h3>
        </div>
        <div className="card-body text-right">
          {cargandoPacientes ? (
            <div> Cargando... </div>
          ) : (
            <>
              <button
                className="btn btn-warning"
                onClick={() => {
                  obtenerPacientes();
                }}
              >
                Refresh
              </button>

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
                          <td>Acciones</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListaPacientes;
