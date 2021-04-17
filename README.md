# FINAL-FRONTEND-G5-CODIGO
## Proyecto Final de FrontEnd - CodiGo - TECSUP
_La aplicación consiste en el registro de diferentes pacientes según el usuario final quien es el Doctor de la Clínica Dental, 
no solo registrando al paciente sino que también creando una historia clínica de lo que le han ido realizando, y a su vez también 
poder programar su correspondiente cita. El usuario podrá registrar al paciente y tenerlo guardado en su base de datos para agilizar 
su registro de cita para el futuro, de igual manera podrá ver su información como su edad o su número de celular según sea la necesidad, 
tendrá la opción de editar la información si ocurriera algún error en los datos del paciente y podrá registrar la fotografía del correspondiente paciente._
## Comenzando
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas._

```
npm install -g yarn
```
_Instalar el NODE.js en el equipo._

### Instalación 🔧

_Una serie paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

1. Una vez instalado, y clonado el git, debera ejecutar el comando por consola
```
yarn install
```
![image](https://user-images.githubusercontent.com/73620785/115120351-a2b82f80-9f72-11eb-9162-bc9baaf2494a.png)

2. El comando anterior ejecutara e instalara las librerias, y para inicializar el software , ingrese
```
yarn start
```
![image](https://user-images.githubusercontent.com/73620785/115120390-d5fabe80-9f72-11eb-95c0-fd7ee052fa38.png)

## Ejecutando las pruebas ⚙️

_Verificar la conexion con el BACKEND que se encuentra en HEROKU_

```
export const URL_BACKEND = "http://dental-app-final.herokuapp.com";
```
![image](https://user-images.githubusercontent.com/73620785/115120422-080c2080-9f73-11eb-9f2d-c4b5ea33cbde.png)

## Consumo de servicios ⚙️

_Consumo del BACKEND_ **LOGIN** _Promesa para la autenticacion del usuario_

```
import { URL_BACKEND } from "../environments/environments";

export const postLogin = async (objAuth) => {
  const peticion = await fetch(`${URL_BACKEND}/login-custom`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objAuth),
  });
  let data = await peticion.json();
  return data;
};

```

![image](https://user-images.githubusercontent.com/73620785/115120592-e495a580-9f73-11eb-9eca-532504892165.png)

_Consumo del BACKEND_ **GET Y POST CITAS** _Crud de datos para las citas_

```
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

```

![image](https://user-images.githubusercontent.com/73620785/115120633-21fa3300-9f74-11eb-9dae-41cbdc945a4c.png)

_Consumo del BACKEND_ **GET, POST, PUT, DELETE HISTORIAS CLINICAS** _Crud de datos para las historias clinicas_

```
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

```

![image](https://user-images.githubusercontent.com/73620785/115120650-33dbd600-9f74-11eb-8b12-c13f592768c3.png)
![image](https://user-images.githubusercontent.com/73620785/115120652-376f5d00-9f74-11eb-8c65-61489ca20249.png)

_Consumo del BACKEND_ **GET, POST, PUT, DELETE HISTORIAS CLINICAS** _Crud de datos para los pacientes_

```
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

export const postPacientes = async (formData) => {
  const peticion = await fetch(`${URL_BACKEND}/pacientes`, {
    method: "POST",
    body: formData,
  });
  const data = await peticion.json();
  return data;
};

export const putPacientes = async (objPaciente) => {
  const peticion = await fetch(
    `${URL_BACKEND}/pacientes/${objPaciente.pacienteDni}`,
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
```

![image](https://user-images.githubusercontent.com/73620785/115120676-540b9500-9f74-11eb-9b6f-0e123a7a4352.png)
![image](https://user-images.githubusercontent.com/73620785/115120682-579f1c00-9f74-11eb-8cca-17d2b1be8858.png)

_Consumo del BACKEND_ **GET, POST, PUT, DELETE HISTORIAS CLINICAS** _Crud de datos para los tratamientos_

```
import { URL_BACKEND } from "../environments/environments";

export const getTratamientos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/tratamientos`);
  const data = await peticion.json();
  return data;
};

export const postTratamientos = async (objTratamiento) => {
  const peticion = await fetch(`${URL_BACKEND}/tratamientos`, {
    method: "POST",
    body: JSON.stringify(objTratamiento),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};

export const putTratamientos = async (objTratamiento) => {
  const peticion = await fetch(
    `${URL_BACKEND}/tratamientos/${objTratamiento.paciente}`,
    {
      method: "PUT",
      body: JSON.stringify(objTratamiento),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await peticion.json();
  return data;
};

export const deleteTratamiento = async (trat_id) => {
  const peticion = await fetch(`${URL_BACKEND}/tratamientos/${trat_id}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};
```

![image](https://user-images.githubusercontent.com/73620785/115120693-6554a180-9f74-11eb-91ca-63cfa7d0eb56.png)
![image](https://user-images.githubusercontent.com/73620785/115120695-6980bf00-9f74-11eb-8234-d9134643b65e.png)


