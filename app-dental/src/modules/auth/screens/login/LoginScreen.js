import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../../../../contexts/authContext";
import { postLogin } from "../../../../services/authService";
import "../../../../styles/login.css";
import { withRouter } from "react-router";

const LoginScreen = (props) => {
  const { iniciarSesionContext } = useContext(AuthContext);
  const [formulario, setFormulario] = useState({
    personalCorreo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(formulario).then((rpta) => {
      console.log(rpta);
      if (rpta.access) {
        // setAuth({})
        iniciarSesionContext(rpta.access);
        props.history.push("/admin");
      }
    });
  };

  return (
    <div className="container container-login">
      <div className="d-flex justify-content-center h-100">
        <div className="card card-login shadow">
          <div className="card-header">
            <h3>Ingresar:</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
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
            <form onSubmit={handleSubmit}>
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
                  name="personalCorreo"
                  onChange={handleChange}
                  value={formulario.personalCorreo}
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
                  name="password"
                  onChange={handleChange}
                  value={formulario.password}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Recordar cuenta
              </div>
              <div className="form-group">
                {/* <Link
                  className="btn float-right login_btn"
                  onClick={handleSubmit}
                  to="/admin/home"
                >
                  Ingresar
                </Link> */}
                <button className="btn float-right login_btn" type="submit">
                  Ingresar
                </button>
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

export default withRouter(LoginScreen);
