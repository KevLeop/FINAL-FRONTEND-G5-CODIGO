import { URL_BACKEND } from "../environments/environments";

export const getHistoriasClinicas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/hclinica`);
  const data = await peticion.json();
  return data;
};

export const posthClinica = async (objhClinica) => {
  const peticion = await fetch(`${URL_BACKEND}/hclinica`, {
    method: "POST",
    body: JSON.stringify(objhClinica),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};

export const putHclinica = async (objHClinica) => {
  const peticion = await fetch(
    `${URL_BACKEND}/pacientes/${objHClinica.id_paciente}`,
    {
      method: "PUT",
      body: JSON.stringify(objHClinica),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await peticion.json();
  return data;
};

export const deleteHclinica = async (id_hclinica) => {
  const peticion = await fetch(`${URL_BACKEND}/hclinica/${id_hclinica}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};
