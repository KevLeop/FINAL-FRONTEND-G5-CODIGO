import React from "react";
import { Accordion, Card, Button, Carousel } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import car1 from "../../../../images/Carousel1.jpg";
import car2 from "../../../../images/Carousel2.png";
import car3 from "../../../../images/Carousel3.jpg";
const HomeScreen = () => {
  const data = {
    columns: [
      {
        label: "Id",
        field: "id_tratamiento",
      },
      {
        label: "Nombre del Tratamiento",
        field: "nombre_tratamiento",
      },
      {
        label: "Descripcion",
        field: "descripcion",
      },
      {
        label: "Piezas dentales",
        field: "pieza_dental",
      },
      {
        label: "Acciones",
        field: "acciones",
      },
    ],
    rows: [
      {
        id_tratamiento: 1,
        nombre_tratamiento: "Nombre tratamiento 1",
        descripcion: "Descripcion1",
        pieza_dental: "Piezas dentales",
        acciones: "Botones para agregar, editar, y eliminar",
      },
    ],
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
                  <h2 className="display-3">Manejo de historias Clinicas</h2>
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
                    <button className="btn btn-success rounded-circle mx-1">
                      <i className="fa fa-refresh" aria-hidden="true"></i>
                      {/**Boton refresh */}
                    </button>
                    <button className="btn btn-success rounded-circle mx-1">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      {/*boton (+) */}
                    </button>
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
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
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
