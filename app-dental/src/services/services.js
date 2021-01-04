const URL_BACKEND = "https://5fea12eb8ede8b0017ff1525.mockapi.io";

// https://5fea12eb8ede8b0017ff1525.mockapi.io/pacientes

// https://5fea12eb8ede8b0017ff1525.mockapi.io/doctor

// https://5fea12eb8ede8b0017ff1525.mockapi.io/hclinica

// https://5fea12eb8ede8b0017ff1525.mockapi.io/detalle

export const getPacientes = async () => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes`);
  const data = await peticion.json();
  return data;
};

export const getHClinicas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/hclinica`);
  const data = await peticion.json();
  return data;
};

export const getDoctor = async () => {
  const peticion = await fetch(`${URL_BACKEND}/doctor`);
  const data = await peticion.json();
  return data;
};
