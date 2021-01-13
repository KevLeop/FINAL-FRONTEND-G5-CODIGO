import React, {useState} from "react";
import DetalleHClinica from "../HistoriasClinicas/components/DetalleHClinica";
import HistoriasClinicas from "../HistoriasClinicas/components/HistoriasClinicas";

const HistoriasClinicasScreen = () => {

  const [formCrear,setFormCrear] = useState(false);

  return (
    <main className="container-fluid mt-4">
      <div className="row mb-4">
        <div className="col text-right">
          <button className="btn btn-info shadow" onClick={()=>{
            setFormCrear(!formCrear)
          }}>Crear Hoja Clinica</button>
        </div>
      </div>
        <div className="row">
        <HistoriasClinicas />
        {
          formCrear && <DetalleHClinica />
        }
        </div>
    </main>
  );
};

export default HistoriasClinicasScreen;
