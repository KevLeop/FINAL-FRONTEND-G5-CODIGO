import React, { useEffect, useState } from "react";
import { getHClinicas } from "../services/services";

const HistoriasClinicas = () => {
  const [hclinica, setHClinica] = useState([]);
  useEffect(() => {
    getHClinicas().then((data) => {
      console.log(data);
      setHClinica(data);
    });
  }, []);
  return (
    <div>
      <p>Componente Historas clinicas</p>
      <ul>
        {hclinica.map((hc) => {
          return (
            <li key={hc.id_hclinica}>
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
