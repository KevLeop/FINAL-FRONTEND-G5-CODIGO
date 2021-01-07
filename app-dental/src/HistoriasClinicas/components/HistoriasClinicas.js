import React, { useContext } from "react";
import HistoriasClinicasContext from "../../contexts/historiasClinicasContext";
import PacientesContext from "../../contexts/pacientesContext";

const HistoriasClinicas = () => {
  const { hClinicas, cargandoHClinicas, obtenerHClinicas } = useContext(
    HistoriasClinicasContext
  );
  const { pacientes } = useContext(PacientesContext);

  const nombrePaciente = (objHC) => {
    const objPac = pacientes.find((pac) => {
      if (+objHC.id_paciente === +pac.id_paciente) {
        return pac;
      } else return null;
    });
    return objPac.nombre;
  };

  return (
    <section className="col-md-8 mt-3">
      <div className="card shadow">
        <div className="card-title text-center mt-3">
          <h3>HISTORIAS CLINICAS</h3>
        </div>
        <div className="card-body">
          {cargandoHClinicas ? (
            <div>Cargando...</div>
          ) : (
            <>
              <button
                className="btn btn-warning"
                onClick={() => {
                  obtenerHClinicas();
                }}
              >
                Refresh
              </button>
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Paciente</th>
                      <th>Fecha</th>
                      <th>Observaciones</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hClinicas.map((objHClinica) => {
                      return (
                        <tr key={objHClinica.id_hclinica}>
                          <td>{objHClinica.id_hclinica}</td>
                          <td>{nombrePaciente(objHClinica)}</td>
                          <td>{objHClinica.fecha}</td>
                          <td>{objHClinica.observaciones}</td>
                          <td>
                            <button className="btn btn-secondary">
                              Acciones
                            </button>
                          </td>
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

export default HistoriasClinicas;
