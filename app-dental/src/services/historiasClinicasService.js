import { URL_BACKEND } from "../environments/environments";

export const getHistoriasClinicas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/hclinicas`);
  const data = await peticion.json();
  return data;
};

export const posthClinica = async (objhClinica) => {
  const peticion = await fetch(`${URL_BACKEND}/hclinicas`, {
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
    `${URL_BACKEND}/hclinicas/${objHClinica.paciente}`,
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
  const peticion = await fetch(`${URL_BACKEND}/hclinicas/${id_hclinica}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};
