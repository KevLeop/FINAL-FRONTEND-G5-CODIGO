import { MDBDataTable } from "mdbreact";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import PacientesContext from "../../../../../contexts/pacientesContext";
import TratamientosContext from "../../../../../contexts/tratamientosContext";
import { getPorCobrar } from "../../../../../services/contabilidadService";

const ListaPorCobrar = () => {
  const [porCobrar, setPorCobrar] = useState([]);
  const [cargandoData, setCargandoData] = useState(true);
  const { tratamientos } = useContext(TratamientosContext);
  const { pacientes } = useContext(PacientesContext);

  const obtenerDataPorCobrar = () => {
    setCargandoData(true);
    getPorCobrar().then((data) => {
      setPorCobrar(data.content);
      setCargandoData(false);
    });
  };

  useEffect(() => {
    obtenerDataPorCobrar();
  }, []);

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
    ],
    rows: porCobrar.map((objHClinica) => {
      return {
        ...objHClinica,
        hclinicaId: +objHClinica.hclinicaId,
        paciente: nombrePaciente(objHClinica.paciente),
        hclinicaFecha: moment(objHClinica.hclinicaFecha).format("DD-MM-YYYY"),
        tratamiento: nombreTratamiento(objHClinica.tratamiento),
      };
    }),
  };

  return (
    <section className="col-md ">
      {cargandoData ? (
        <div className="card shadow mt-4">
          <div className="card-title text-center mt-3">
            <h4>Cargando Deudas de Historias Clinicas</h4>
          </div>
          <div className="card-body text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow mt-4">
          <div className="card-title text-center mt-3">
            <h3>Tratamientos por cobrar</h3>
          </div>
          <div className="card-body ">
            <div className="text-right">
              <button
                className="btn btn-success rounded-circle mx-1"
                onClick={() => {
                  obtenerDataPorCobrar();
                  // setcargandoData(false);
                }}
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
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

export default ListaPorCobrar;
