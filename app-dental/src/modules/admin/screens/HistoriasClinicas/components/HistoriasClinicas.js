import React, { useContext } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import Moment from "moment";
import PacientesContext from "../../../../../contexts/pacientesContext";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { deleteHclinica } from "../../../../../services/historiasClinicasService";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
Moment.locale("es");
const HistoriasClinicas = () => {
  const {
    hClinicas,
    cargandoHClinicas,
    obtenerHClinicas,
    setModalCrearHClinica,
    setHClinicaEditar,
    setModalEditarHClinica,
    setDetalleHC,
    setObjDetalleHC,
    objDetalleHC,
  } = useContext(HistoriasClinicasContext);

  const { tratamientos } = useContext(TratamientosContext);

  const { pacientes } = useContext(PacientesContext);

  const nombrePaciente = (idPacHC) => {
    const pac = pacientes.find((pac) => +pac.pacienteDni === +idPacHC);
    return pac ? `${pac.pacienteNombre} ${pac.pacienteApellido}` : "S/N";
  };

  const nombreTratamiento = (idTratHC) => {
    const tratamientoEncontrado = tratamientos.find(
      (trat) => +trat.tratamientoId === +idTratHC
    );
    return tratamientoEncontrado
      ? tratamientoEncontrado.tratamientoNombre
      : "S/N";
  };

  const eliminar = (id_hc) => {
    Swal.fire({
      title: "Seguro que desea eliminar Historia Clinica",
      icon: "error",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        setDetalleHC(false);
        deleteHclinica(id_hc).then((data) => {
          console.log(data);
          if (data.success) {
            obtenerHClinicas();
            setDetalleHC(false);
            Swal.fire({
              title: "Eliminado",
              icon: "success",
              timer: 800,
              showCancelButton: false,
            });
          }
        });
      }
    });
  };

  const data = {
    columns: [
      {
        label: "Id",
        field: "hclinicaId",
      },
      {
        label: "Nombre",
        field: "paciente",
      },
      {
        label: "Fecha",
        field: "hclinicaFecha",
      },
      {
        label: "Problema",
        field: "hclinicaProblema",
      },
      {
        label: "Diagnostico",
        field: "hclinicaDiagnostico",
      },
      {
        label: "Tratamiento",
        field: "tratamiento",
      },
      {
        label: "Acciones",
        field: "acciones",
      },
    ],
    rows: hClinicas.map((objHClinica) => {
      return {
        ...objHClinica,
        hclinicaId: +objHClinica.hclinicaId,
        paciente: nombrePaciente(objHClinica.paciente),
        hclinicaFecha: Moment(objHClinica.hclinicaFecha).format("DD-MM-YYYY"),
        tratamiento: nombreTratamiento(objHClinica.tratamiento),
        acciones: (
          <>
            <button
              className="btn rounded-circle fa-lg px-0 py-0 ml-1"
              onClick={() => {
                setDetalleHC(true);
                setObjDetalleHC({
                  ...objHClinica,
                  paciente: objHClinica.paciente,
                  hclinicaTratamiento: objHClinica.tratamiento,
                });
                console.log(objDetalleHC);
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
                setHClinicaEditar({
                  ...objHClinica,
                  paciente: nombrePaciente(objHClinica.paciente),
                });
                setModalEditarHClinica(true);
              }}
            >
              <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
            </button>
            <button
              className="btn rounded-circle px-0 py-0 ml-1"
              onClick={() => {
                eliminar(objHClinica.hclinicaId);
              }}
            >
              <i
                className="fa fa-minus-circle fa-lg" // boton eliminar
                aria-hidden="true"
              ></i>
            </button>
          </>
        ),
      };
    }),
  };

  return (
    <section className="col-md-9 ">
      {cargandoHClinicas ? (
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
                className="btn btn-success rounded-circle mx-1"
                onClick={() => {
                  setDetalleHC(false);
                  obtenerHClinicas();
                  // setCargandoHClinicas(false);
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
            <div className="table-responsive">
              <MDBDataTable
                data={data}
                responsive
                striped
                hover
                bordered
                displayEntries={false}
                entries={15}
                fixed
                infoLabel={["Mostrando", "a", "de", "pacientes"]}
                paginationLabel={["Anterior", "Siguiente"]}
                searchLabel="Buscar..."
                searchTop
                // materialSearch
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HistoriasClinicas;
