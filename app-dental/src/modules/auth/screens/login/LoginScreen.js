import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/login.css";

const LoginScreen = () => {
  return (
    <div className="container container-login">
      <div className="d-flex justify-content-center h-100">
        <div className="card card-login shadow">
          <div className="card-header">
            <h3>Ingresar:</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fa fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre de Usuario"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Recordar cuenta
              </div>
              <div className="form-group">
                <Link className="btn float-right login_btn" to="/admin">
                  Ingresar
                </Link>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              ¿No tienes una cuenta?<Link to="/register">Registrate</Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
