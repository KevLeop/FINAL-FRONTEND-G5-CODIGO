import React, { useContext } from "react";
import HistoriasClinicasContext from "../../../contexts/historiasClinicasContext";
import Moment from "moment";
import PacientesContext from "../../../contexts/pacientesContext";
import { deleteHclinica } from "../../../services/pacientesService";

Moment.locale("es");
const HistoriasClinicas = () => {
  const { hClinicas,
     cargandoHClinicas,
      obtenerHClinicas,
      setHClinicaDetalle,
    setModalCrearHClinica,
    setHClinicaEditar,
    setModalEditarHClinica} = useContext(HistoriasClinicasContext);    

  const { pacientes, cargandoPacientes } = useContext(PacientesContext);

  const nombrePaciente = (idPacHC) => {
    console.log(idPacHC);
    const pac = pacientes.find((pac) => +pac.id_paciente === +idPacHC);
    return pac ? pac.nombre : "S/N";
  };

  return (
    <section className="col-md-9 ">
      {cargandoHClinicas || cargandoPacientes ? (
        <div className="card shadow">
          <div className="card-title text-center mt-3">
            <h4>Cargando Historias Clinicas</h4>
          </div>
          <div className="card-body text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow">
          <div className="card-title text-center mt-3">
            <h3>Historias Clinicas</h3>
          </div>
          <div className="card-body ">
            <div className="text-right">
              <button
                className="btn btn-success"
                onClick={() => {
                  obtenerHClinicas();
                }}
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
              <button
                  className="btn btn-success rounded-circle mx-1"
                  onClick={() => {
                    setModalCrearHClinica(true);
                  }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            <div className="table-responsive mt-1">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Paciente</th>
                    <th>Fecha</th>
                    <th>Problema</th>
                    <th>Diagnostico</th>
                    <th>Tratamiento</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {hClinicas.map((objHClinica) => {
                    return (
                      
                      <tr key={objHClinica.id_hclinica}>
                        <td>{objHClinica.id_hclinica}</td>

                        <td>{nombrePaciente(objHClinica.id_paciente)}</td>
                        {/* <td>{objHClinica.id_paciente}</td> */}
                        <td>{objHClinica.fecha}</td>
                        <td>{objHClinica.problema}</td>
                        <td>{objHClinica.diagnostico}</td>
                        <td>{objHClinica.tratamiento}</td>
                        <td>
                        <button
                          className="btn rounded-circle fa-lg px-0 py-0 ml-1"
                          /*onClick={(e) => {
                            setHClinicaDetalle(true);
                            setObjDetallePaciente({
                              id_hclinica: objHClinica.id_hclinica,
                              fecha: objHClinica.fecha,
                              tratamiento: objHClinica.tratamiento,
                              problema: objHClinica.problema,
                              Moment(
                                objHClinica.fecha
                              ).format("LL"),
                              telefono: objHClinica.telefono,
                              sexo: objHClinica.sexo,
                              paciente_img: objHClinica.paciente_img,
                            });
                            console.log(objDetallePaciente);
                          }} */
                        >
                          <i
                            className="fa fa-info-circle fa-sm" // boton info
                            aria-hidden="true"
                          ></i>
                        </button>
                          <button
                          
                            className="btn px-0 py-0 ml-1"
                            onClick={() => {
                              setHClinicaEditar(objHClinica);
                              setModalEditarHClinica(true);
                            }}
                          >
                            <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
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
 /*
const eliminar = (hclinica_id) => {
  Swal.fire({
    title: "¿Seguro de eliminar paciente?",
    icon: "error",
    text: "Los cambios serán irreversibles",
    showCancelButton: true,
  }).then((rpta) => {
    if (rpta.isConfirmed) {
      setPacienteDetalle(false);
      deleteHclinica(hclinica_id).then((data) => {
        if (data.id_hclinica) {
          obtenerHClinicas();
          set(false);
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
};*/

export default HistoriasClinicas;
