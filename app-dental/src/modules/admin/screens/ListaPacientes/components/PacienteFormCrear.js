import React, { useContext, useState } from "react";
import PacientesContext from "../../../../../contexts/pacientesContext";
import Swal from "sweetalert2";
import { postPacientes } from "../../../../../services/pacientesService";
import { useForm } from "react-hook-form";
import { URL_BACKEND } from "../../../../../environments/environments";

const formularioVacio = {
  nombre: "",
  apellido: "",
  fechadenacimiento: "",
  telefono: "",
  sexo: "",
  paciente_img: "",
};

const PacienteFormCrear = () => {
  const {
    obtenerPacientes,
    setmodalCrearPaciente, // modalCrearPaciente,
  } = useContext(PacientesContext);

  const [formCrear, setFormCrear] = useState(formularioVacio);
  const { register, handleSubmit } = useForm();

  // const handleChange = (e) => {
  //   setFormCrear({
  //     ...formCrear,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formCrear);
  // };

  const onSubmit = (fData) => {
    const dataPaciente = new FormData();
    dataPaciente.append("pacienteImagen", fData.pacienteImagen[0]);
    dataPaciente.append("pacienteNombre ", fData.pacienteNombre);
    dataPaciente.append("pacienteDni", fData.pacienteDni);
    dataPaciente.append("pacienteApellido", fData.pacienteApellido);
    dataPaciente.append("pacienteFnacimiento", fData.pacienteFnacimiento);
    dataPaciente.append("pacienteSexo", fData.pacienteSexo);
    dataPaciente.append("pacienteTelefono", fData.pacienteTelefono);
    dataPaciente.append("pacienteEmail", fData.pacienteEmail);
    console.log(dataPaciente.get("pacienteImagen"));

    Swal.fire({
      title: `Seguro de crear paciente ${formCrear.nombre} ${formCrear.apellido}`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      // console.log(data);
      if (rpta.isConfirmed) {
        postPacientes(dataPaciente).then((data) => {
          if (data.success) {
            setFormCrear(formularioVacio);
            obtenerPacientes();
            Swal.fire({
              title: "Hecho!",
              text: "El paciente ha sido creado exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 800,
            });
            setmodalCrearPaciente(false);
          } else {
            Swal.fire({
              title: "Error!",
              text: "No se pudo registrar paciente",
              icon: "error",
              showCancelButton: false,
              timer: 800,
            });
          }
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          {...register("pacienteDni")}
          type="text"
          className="form-control"
          placeholder="Ingrese nro de DNI"
          name="pacienteDni"
        />
      </div>
      <div className="form-group">
        <input
          {...register("pacienteNombre")}
          className="form-control"
          type="text"
          placeholder="Nombres del paciente"
          name="pacienteNombre"
          // value={formCrear.nombre}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          {...register("pacienteApellido")}
          className="form-control"
          type="text"
          placeholder="Apellidos del paciente"
          name="pacienteApellido"
          // value={formCrear.apellido}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="form-control input-group">
          <label htmlFor="fechadenacimiento">
            Fecha de Nacimiento: {"\u00A0"}
          </label>

          <input
            {...register("pacienteFnacimiento")}
            className="custom-date"
            type="date"
            id="fechadenacimiento"
            name="pacienteFnacimiento"
            // value={formCrear.fechadenacimiento}
            // onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <input
          {...register("pacienteTelefono")}
          className="form-control"
          type="text"
          placeholder="Teléfono"
          name="pacienteTelefono"
          // value={formCrear.telefono}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <select
          {...register("pacienteSexo")}
          className="form-control"
          name="pacienteSexo"
          id="sexo"
          // onChange={handleChange}
        >
          <option value="">--Seleccione genero del paciente...</option>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
          <option value="O">No especificar</option>
        </select>
      </div>
      <div className="form-group">
        <input
          {...register("pacienteEmail")}
          type="email"
          placeholder="Ingrese correo electronico"
          className="form-control"
          name="pacienteEmail"
        />
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="custom-file">
            <input
              {...register("pacienteImagen")}
              type="file"
              className="custom-file-input"
              name="pacienteImagen"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              // onerror={`"this.src='${URL_BACKEND}/paciente_default.jpg'"`}

              // data={`${URL_BACKEND}´/paciente_default.png`}
              // onerror="if (this.src != 'error.jpg') this.src = 'error.jpg';"
              // onChange={handleChangeFile}
            />
            <label className="custom-file-label" for="inputGroupFile04">
              Seleccione foto del paciente
            </label>
          </div>
        </div>
      </div>

      <div className="form-group d-flex justify-content-between">
        <button className="btn btn-primary" type="submit">
          Crear
        </button>
      </div>
    </form>
  );
};

export default PacienteFormCrear;
