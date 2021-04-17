import { URL_BACKEND } from "../environments/environments";

export const getPorCobrar = async () => {
  const peticion = await fetch(`${URL_BACKEND}/pendientePago`);
  const data = await peticion.json();
  return data;
};
