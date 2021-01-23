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
    `${URL_BACKEND}/pacientes/${objPaciente.id_paciente}`,
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

export const deletePaciente = async (prod_id) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes/${prod_id}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};

export const deleteHclinica = async (id_hclinica) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes/${id_hclinica}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};


