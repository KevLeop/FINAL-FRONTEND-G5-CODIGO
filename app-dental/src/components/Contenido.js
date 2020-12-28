import React from "react";
import Citas from "./Citas";
import HistoriasClinicas from "./HistoriasClinicas";
import ListaPacientes from "./ListaPacientes";

const Contenido = ({ pantalla }) => {
  return (
    <div>
      {pantalla === "listaPacientes" ? (
        <ListaPacientes />
      ) : pantalla === "historiasClinicas" ? (
        <HistoriasClinicas />
      ) : pantalla === "citas" ? (
        <Citas />
      ) : null}
    </div>
  );
};

export default Contenido;
