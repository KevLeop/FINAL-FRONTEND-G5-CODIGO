import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import Moment from "moment";
import PacientesContext from "../../../../../contexts/pacientesContext";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { deleteHclinica } from "../../../../../services/historiasClinicasService";
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
  } = useContext(HistoriasClinicasContext);

  const { pacientes, cargandoPacientes } = useContext(PacientesContext);

  const nombrePaciente = (idPacHC) => {
    const pac = pacientes.find((pac) => +pac.pacienteId === +idPacHC);
    console.log(pacientes);
    return pac ? `${pac.nombre} ${pac.apellido}` : "S/N";
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
          if (data.success === true) {
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
        acciones: (
          <>
            <button
              className="btn rounded-circle fa-lg px-0 py-0 ml-1"
              onClick={() => {
                setDetalleHC(true);
                setObjDetalleHC({
                  paciente: objHClinica.paciente,
                  hclinicaFecha: objHClinica.hclinicaFecha,
                  hclinicaProblema: objHClinica.hclinicaProblema,
                  hclinicaDiagnostico: objHClinica.hclinicaDiagnostico,
                  hclinicaTratamiento: objHClinica.tratamiento,
                  hclinicaPagado: objHClinica.hclnicaPagado,
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
                pagingTop
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
