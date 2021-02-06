import React, { useEffect, useState } from "react";
import { getTratamientos } from "../services/tratamientoService";
import TratamientosContext from "./tratamientosContext";

const TratamientosState = ({ children }) => {
  const [tratamientos, setTratamientos] = useState([]);
  const [cargandoTratamientos, setCargandoTratamientos] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  const obtenerTratamientos = () => {
    // setCargandoTratamientos(true);
    getTratamientos().then((data) => {
      setTratamientos(data);
      setCargandoTratamientos(false);
    });
  };

  useEffect(() => {
    obtenerTratamientos();
  }, []);

  return (
    <TratamientosContext.Provider
      value={{
        tratamientos: tratamientos,
        obtenerTratamientos: obtenerTratamientos,
        cargandoTratamientos: cargandoTratamientos,
        setCargandoTratamientos: setCargandoTratamientos,
        mostrarModal: mostrarModal,
        setMostrarModal: setMostrarModal,
      }}
    >
      {children}
    </TratamientosContext.Provider>
  );
};

export default TratamientosState;
