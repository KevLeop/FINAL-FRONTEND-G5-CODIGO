import { URL_BACKEND } from "../environments/environments";

export const getPacientes = async () => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes`);
  const data = await peticion.json();
  return data;
};

export const postPacientes = async (objPaciente) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes`, {
    method: "POST",
    body: JSON.stringify(objPaciente),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};

export const putPacientes = async (objProducto) => {
  const peticion = await fetch(
    `${URL_BACKEND}/pacientes/${objProducto.id_paciente}`,
    {
      method: "PUT",
      body: JSON.stringify(objProducto),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await peticion.json();
  return data;
};
