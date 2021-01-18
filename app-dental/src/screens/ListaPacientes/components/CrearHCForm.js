import React from "react";

const CrearHCForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fecha">Fecha:</label>
        <input className="form-control" type="date" />
      </div>
      <div className="form-group">
        <label htmlFor="">Nombre del paciente:</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Tratamiento</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Problema: </label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Diagnostico: </label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group text-center">
        <button className="btn btn-info btn-lg">Crear Historia Clinica</button>
      </div>
    </form>
  );
};

export default CrearHCForm;
