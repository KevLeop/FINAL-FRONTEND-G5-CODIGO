import React from "react";
import ListaPacienteDetalle from "../ListaPacientes/components/ListaPacienteDetalle";
import ListaPacientes from "../ListaPacientes/components/ListaPacientes";

const ListaPacientesScreen = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <ListaPacienteDetalle />
        <ListaPacientes />
      </div>
    </main>
  );
};

export default ListaPacientesScreen;
