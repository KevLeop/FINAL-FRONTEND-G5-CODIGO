import React, { useContext } from "react";
import TratamientosContext from "../../../../contexts/tratamientosContext";
import TratamientoFormCrear from "./components/TratamientoFormCrear";
import { deleteTratamiento } from "../../../../services/tratamientoService";

import { Accordion, Card, Button, Carousel, Modal } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import car1 from "../../../../images/Carousel1.jpg";
import car2 from "../../../../images/Carousel2.png";
import car3 from "../../../../images/Carousel3.jpg";

const HomeScreen = () => {
  const {
    obtenerTratamientos,
    tratamientos,
    cargandoTratamientos,
    setCargandoTratamientos,
    mostrarModal,
    setMostrarModal,
  } = useContext(TratamientosContext);

  const eliminarTratamiento = (tratamientoId) => {
    Swal.fire({
      title: "¿Seguro de eliminar tratamiento?",
      icon: "error",
      text: "Los cambios serán irreversibles",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        deleteTratamiento(tratamientoId).then((data) => {
          if (data.success === true) {
            obtenerTratamientos();
            Swal.fire({
              title: "Eliminado",
              icon: "success",
              timer: 800,
              showCancelButton: false,
              position: "center",
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
        field: "tratamientoId",
      },
      {
        label: "Nombre del Tratamiento",
        field: "tratamientoNombre",
      },
      {
        label: "Descripcion",
        field: "tratamientoDescripcion",
      },
      {
        label: "Acciones",
        field: "acciones",
      },
    ],

    rows: tratamientos
      .filter((objTratamiento) => objTratamiento.tratamientoEstado === true)
      .map((trat) => {
        return {
          ...trat,
          acciones: (
            <>
              <button className="btn px-0 py-0 ml-1">
                <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
              </button>
              <button
                className="btn rounded-circle px-0 py-0 ml-1"
                onClick={() => {
                  eliminarTratamiento(trat.tratamientoId);
                  console.log(trat);
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

    // rows: tratamientos.map((objTratamiento) => {
    //   if (objTratamiento.tratamientoEstado === true) {
    //     return {
    //       ...objTratamiento,
    //       acciones: (
    //         <>
    //           <button className="btn px-0 py-0 ml-1">
    //             <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
    //           </button>
    //           <button
    //             className="btn rounded-circle px-0 py-0 ml-1"
    //             onClick={() => {
    //               eliminarTratamiento(objTratamiento.tratamientoId);
    //               console.log(objTratamiento);
    //             }}
    //           >
    //             <i
    //               className="fa fa-minus-circle fa-lg" // boton eliminar
    //               aria-hidden="true"
    //             ></i>
    //           </button>
    //         </>
    //       ),
    //     };
    //   } else {
    //     return;
    //   }
    // }),
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 oscurecer"
                  src={car1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2 className="display-1">Sistema Dental</h2>
                  <p className="h1">Manten organizada tu lista de pacientes</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 oscurecer"
                  src={car2}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 className="display-4">Manejo de historias Clinicas</h2>
                  <p className="h1">
                    Registra los tratamientos de tus pacientes en el modulo de
                    Historias Clinicas
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 oscurecer"
                  src={car3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 className="display-3"> Calendario de Citas</h2>
                  <p className="h1">
                    Organiza tu agenda con nuestro calendario de citas
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <div className="d-flex">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Mis tratamientos
                  </Accordion.Toggle>
                  <div className="col text-right">
                    <button
                      className="btn btn-success rounded-circle mx-1"
                      onClick={() => {
                        setCargandoTratamientos(true);
                        obtenerTratamientos();
                      }}
                    >
                      <i className="fa fa-refresh" aria-hidden="true"></i>
                      {/**Boton refresh */}
                    </button>
                    <button
                      className="btn btn-success rounded-circle mx-1"
                      onClick={() => {
                        setMostrarModal(true);
                      }}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      {/*boton (+) */}
                    </button>
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                {cargandoTratamientos ? (
                  <div className="card shadow">
                    <div className="card-title text-center mt-3">
                      <h4>Cargando Listado de Tratamientos</h4>
                    </div>
                    <div className="card-body text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Cargando...</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Card.Body>
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
                        infoLabel={["Mostrando", "a", "de", "tratamientos"]}
                        paginationLabel={["Anterior", "Siguiente"]}
                        // searchLabel="Buscar..."
                        searching={false}
                      />
                    </div>
                  </Card.Body>
                )}
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <Modal
        show={mostrarModal}
        onHide={() => {
          setMostrarModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crear Tratamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TratamientoFormCrear />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default HomeScreen;
