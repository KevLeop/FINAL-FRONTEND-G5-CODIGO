import React, { useState } from "react";
import AuthContext from "./authContext";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    autenticado: false,
    personalCorreo: null,
    usu_id: null,
    token: null,
    cargando: true,
  });

  const iniciarSesionContext = (token) => {
    localStorage.setItem("token", token);

    const payload = token.split(".")[1];
    console.log(payload);
    const payloadDesencriptado = atob(payload);
    console.log(payloadDesencriptado);
    const payloadJSON = JSON.parse(payloadDesencriptado);
    console.log(payloadJSON);
    setAuth({
      autenticado: true,
      personalCorreo: payloadJSON.personalCorreo,
      usu_id: payloadJSON.user_id,
      token: token,
      cargando: false,
    });
  };

  const iniciarSesionLocalStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
    } else {
    }
  };

  iniciarSesionLocalStorage();

  return (
    <AuthContext.Provider
      value={{
        autenticado: auth.autenticado,
        usu_id: auth.usu_id,
        token: auth.token,
        cargando: auth.cargando,
        iniciarSesionContext: iniciarSesionContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
