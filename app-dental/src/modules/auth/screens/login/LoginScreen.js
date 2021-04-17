import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../contexts/authContext";
import { postLogin } from "../../../../services/authService";
import { withRouter } from "react-router";
import "../../../../styles/login.css";

const LoginScreen = (props) => {
  const { iniciarSesionContext } = useContext(AuthContext);
  const [formulario, setFormulario] = useState({
    personalCorreo: "",
    password: "",
  });
  const [logueado, setLogueado] = useState();

  const handleChange = (e) => {
    setLogueado();
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
        props.history.push("/admin/home");
        setLogueado(true);
      } else {
        setLogueado(false);
      }
    });
  };

  return (
    <div className="container container-login">
      <div className="d-flex justify-content-center h-100">
        <div className="card card-login shadow">
          <div className="card-header pb-0">
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
              <div className="input-group form-group">
                {logueado === false ? (
                  <span class="alert alert-danger pt-0 pb-0 mb-0">
                    Usuario o contraseña incorrectos
                  </span>
                ) : (
                  <p className="mb-0"></p>
                )}
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Recordar cuenta
              </div>
              <div className="form-group">
                <button className="btn float-right login_btn" type="submit">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer mt-0 mb-0">
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
// export default LoginScreen;
