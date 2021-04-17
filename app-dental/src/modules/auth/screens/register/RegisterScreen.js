import React, { useState } from "react";
import "../../../../styles/register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { postRegister } from "../../../../services/authService";
const formularioVacio = {
  personalNombre: "",
  personalApellido: "",
  personalCorreo: "",
  personalTipo: 1,
  password: "",
  personalTelefono: "",
  passwordConfirm: "",
};
const RegisterScreen = () => {
  const { register, handleSubmit } = useForm();
  const [registerForm, setRegisterForm] = useState(formularioVacio);

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(registerForm);
    Swal.fire({
      title: "¿Seguro de crear usuario con estos datos",
      icon: "question",
      text: "El usuario se registrará en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        if (registerForm.password === registerForm.passwordConfirm) {
          postRegister(registerForm).then((data) => {
            if (data.success) {
              setRegisterForm(formularioVacio);
              Swal.fire({
                title: "Hecho!",
                text: "Usuario creado con éxito",
                icon: "success",
                showCancelButton: false,
                timer: 1000,
              });
            } else {
              console.log(data.content);
              Swal.fire({
                title: "Error!",
                text: data.content[Object.keys(data.content)[0]],
                icon: "error",
                showCancelButton: false,
                timer: 1600,
              });
            }
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Las confirmacion de contraseña no coincide",
            icon: "error",
            showCancelButton: false,
            timer: 1600,
          });
        }
      }
    });
  };

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
          <Link className="btnLogin" type="submit" name="" to="/">
            Login
          </Link>
          {/* <input className="btnLogin" type="submit" name="" value="Login" /> */}
          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            {/* <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            > */}
            <h3 className="register-heading">Ingresa tus datos</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("personalNombre")}
                      type="text"
                      className="form-control"
                      placeholder="Nombres *"
                      name="personalNombre"
                      onChange={handleChange}
                      value={registerForm.personalNombre}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      {...register("personalApellido")}
                      type="text"
                      className="form-control"
                      placeholder="Apellidos *"
                      name="personalApellido"
                      onChange={handleChange}
                      value={registerForm.personalApellido}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control"
                      placeholder="Contraseña *"
                      name="password"
                      onChange={handleChange}
                      value={registerForm.password}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("personalCorreo")}
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                      name="personalCorreo"
                      onChange={handleChange}
                      value={registerForm.personalCorreo}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      minlength="9"
                      maxlength="12"
                      className="form-control"
                      placeholder="Telefono"
                      name="personalTelefono"
                      onChange={handleChange}
                      value={registerForm.personalTelefono}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      {...register("passwordConfirm")}
                      type="password"
                      className="form-control"
                      placeholder="Confirma tu contraseña *"
                      name="passwordConfirm"
                      onChange={handleChange}
                      value={registerForm.passwordConfirm}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Registrar"
                  />
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
