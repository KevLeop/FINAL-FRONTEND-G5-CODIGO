import React from "react";
import DetalleHClinica from "../HistoriasClinicas/components/DetalleHClinica";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";

const HistoriasClinicasScreen = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <DetalleHClinica />
        <HistoriasClinicas />
      </div>
    </main>
  );
};

export default HistoriasClinicasScreen;
