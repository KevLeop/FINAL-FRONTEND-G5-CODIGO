import React, { useContext, useState } from "react";
import HistoriasClinicasContext from "../../../../../contexts/historiasClinicasContext";
import Moment from "moment";
import PacientesContext from "../../../../../contexts/pacientesContext";
import { MDBDataTable } from "mdbreact";
Moment.locale("es");
const HistoriasClinicas = () => {
  const {
    hClinicas,
    cargandoHClinicas,
    obtenerHClinicas,
    setHClinicaDetalle,
    setCargandoHClinicas,
    setModalCrearHClinica,
    setHClinicaEditar,
    setModalEditarHClinica,
    setDetalleHC,
    setObjDetalleHC,
  } = useContext(HistoriasClinicasContext);

  const { pacientes, cargandoPacientes } = useContext(PacientesContext);

  const nombrePaciente = (idPacHC) => {
    const pac = pacientes.find((pac) => +pac.id_paciente === +idPacHC);
    return pac ? `${pac.nombre} ${pac.apellido}` : "S/N";
  };

  const data = {
    columns: [
      {
        label: "Id",
        field: "id_hclinica",
      },
      {
        label: "Nombre",
        field: "id_paciente",
      },
      {
        label: "Fecha",
        field: "fecha",
      },
      {
        label: "Problema",
        field: "problema",
      },
      {
        label: "Diagnostico",
        field: "diagnostico",
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
        id_hclinica: +objHClinica.id_hclinica,
        id_paciente: nombrePaciente(objHClinica.id_paciente),
        fecha: Moment(objHClinica.fecha).format("DD-MM-YYYY"),
        acciones: (
          <>
            <button
              className="btn rounded-circle fa-lg px-0 py-0 ml-1"
              onClick={() => {
                setDetalleHC(true);
                setObjDetalleHC({
                  id_paciente: objHClinica.id_paciente,
                  fecha: objHClinica.fecha,
                  problema: objHClinica.problema,
                  diagnostico: objHClinica.diagnostico,
                  tratamiento: objHClinica.tratamiento,
                  pagado: false,
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
                  nombre: nombrePaciente(objHClinica.id_paciente),
                });
                setModalEditarHClinica(true);
              }}
            >
              <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
            </button>
            <button
              className="btn rounded-circle px-0 py-0 ml-1"
              onClick={() => {
                // eliminar(objPaciente.id_paciente);
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
