import { URL_BACKEND } from "../environments/environments";

export const getCitas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/citas`);
  const data = await peticion.json();
  return data;
};

export const postCitas = async (objCita) => {
  const peticion = await fetch(`${URL_BACKEND}/citas`, {
    method: "POST",
    body: JSON.stringify(objCita),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};
