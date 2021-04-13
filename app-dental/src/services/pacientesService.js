import { URL_BACKEND } from "../environments/environments";

export const getPacientes = async () => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes`);
  const data = await peticion.json();
  return data;
};

export const searchPaciente = async (nombrePaciente) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes?=${nombrePaciente}`);
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

export const putPacientes = async (objPaciente) => {
  const peticion = await fetch(
    `${URL_BACKEND}/pacientes/${objPaciente.pacienteId}`,
    {
      method: "PUT",
      body: JSON.stringify(objPaciente),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await peticion.json();
  return data;
};

export const deletePaciente = async (pacienteId) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes/${pacienteId}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};
