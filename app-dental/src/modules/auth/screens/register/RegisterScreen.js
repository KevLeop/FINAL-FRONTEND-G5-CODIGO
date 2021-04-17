import React, { useState } from "react";
import "../../../../styles/register.css";

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState({
    personalCorreo: "",
    password: "",
    personalTipo: 1,
    personalNombre: "",
    personalApellido: "",
  });

  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          {/* <i className="fas fa-tooth"></i> */}
          <img
            src="https://toppng.com/public/uploads/thumbnail/icon-1-x-677703-dental-teeth-white-icons-11553506858hvlui5bcl3.png"
            alt=""
          />
          <h3>Bienvenido</h3>
          <p>
            Tendrás 30 días de prueba para experimentar un mejor manejo de tus
            citas.
          </p>
          <input className="btnLogin" type="submit" name="" value="Login" />
          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Ingresa tus datos</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellidos *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Telefono"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirma tu contraseña *"
                      value=""
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Registrar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
