import React, { useEffect, useState } from "react";
import { getHClinicas, getPacientes } from "../services/services";

const HistoriasClinicas = () => {
  const [hclinica, setHClinica] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes().then((data) => {
      console.log(data);
      setPacientes(data);
    });
  }, []);
  useEffect(() => {
    getHClinicas().then((data) => {
      console.log(data);
      setHClinica(data);
    });
  }, []);

  const extraeNombre = (historiaClinica) => {
    let resultado = pacientes.find((pac) => {
      if (+pac.id_paciente === +historiaClinica.id_paciente) {
        return pac;
      } else {
        return null;
      }
    });
    return `${resultado.nombre} ${resultado.apellido}`;
  };

  return (
    <div>
      <p>Componente Historias clinicas</p>
      <ul>
        {hclinica.map((hc) => {
          return (
            <li key={hc.id_hclinica}>
              <p>Nombre del Paciente: {extraeNombre(hc)}</p>
              <p>id: {hc.id_hclinica}</p>
              <p>fecha: {hc.fecha}</p>
              <p>observaciones: {hc.observaciones}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoriasClinicas;
