import React from "react";
import DetalleHClinica from "../HistoriasClinicas/components/DetalleHClinica";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";

const HistoriasClinicasScreen = () => {
  return (
    <main className="container-fluid mt-4">
      <div className="row">
        <HistoriasClinicas />
        <DetalleHClinica />
      </div>
    </main>
  );
};

export default HistoriasClinicasScreen;
