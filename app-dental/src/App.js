import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Contenido from "./components/Contenido";
import { getPacientes } from "./services/services";

const App = () => {
  const [pantalla, setPantalla] = useState("ListaPacientes");

  return (
    <>
      <Header setPantalla={setPantalla} />

      <main className="container-fluid">
        <div className="row">
          <div className="col-md-2">INFO USUARIO</div>
          <div className="col-md-10">
            <Contenido pantalla={pantalla} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
