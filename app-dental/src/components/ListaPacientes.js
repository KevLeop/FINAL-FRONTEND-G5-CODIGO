import React, { useState, useEffect } from "react";
import { getPacientes } from "../services/services";

const ListaPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes().then((data) => {
      console.log(data);
      setPacientes(data);
    });
  }, []);

  return (
    <div>
      <p> Componente Lista Pacientes </p>
      <ul>
        {pacientes.map((pac) => {
          return (
            <li key={pac.id_paciente}>
              <p>
                {pac.id_paciente} Nombre: {pac.nombre}
              </p>
              <p>Apellido:{pac.apellido}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaPacientes;
