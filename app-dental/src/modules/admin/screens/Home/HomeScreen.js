import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
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
    ],
    rows: [
      {
        id_tratamiento: 1,
        nombre_tratamiento: "Nombre tratamiento 1",
        descripcion: "Descripcion1",
        pieza_dental: "Piezas dentales",
      },
    ],
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <h1 className="display-1"> Bienvenido!</h1>
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
