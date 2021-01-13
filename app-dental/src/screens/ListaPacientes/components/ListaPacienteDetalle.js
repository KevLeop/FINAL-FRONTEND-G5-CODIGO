import React, { useContext } from "react";
import PacientesContext from "../../../contexts/pacientesContext";
import Moment from "moment";

const ListaPacienteDetalle = () => {
  const { objDetallePaciente } = useContext(PacientesContext);
  const calcularEdad = (fecha) => {
    // let fNacimiento = new Date(fecha);
    let edad = Moment().diff(fecha, "years", false);
    // console.log(`Fecha eadd: ${edad}`);
    return edad;
  };
  return (
    <section className="col-md-3 ">
      <div className="card shadow animate__animated animate__fadeInRight ">
        <div className="card-title text-center mt-3">
          <h4>
            <strong>Detalle de Paciente</strong>
          </h4>
        </div>
        <div className="card-body">
          <figure className="text-center">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU"
              alt=""
              width="150"
            />
          </figure>
          <legend>
            <div className="form-group">
              <strong>Nombre y Apellidos: </strong>
              <br />
              <p>
                {`${objDetallePaciente.nombre} ${objDetallePaciente.apellido}`}
              </p>
            </div>
            <div className="form-group">
              <strong>Fecha de Nacimiento: </strong>
              <br />
              <p>{objDetallePaciente.fechadenacimiento}</p>
            </div>
            <div className="form-group">
              <strong>Edad:</strong>
              <br />
              <p>{calcularEdad(objDetallePaciente.fechadenacimiento)}</p>
            </div>
            <div className="form-group">
              <strong>Telefono: </strong>
              <br />
              <p>{objDetallePaciente.telefono}</p>
            </div>
            <div className="form-group">
              <strong>Sexo: </strong>
              <br />
              <p>{objDetallePaciente.sexo}</p>
            </div>
          </legend>
        </div>
      </div>
    </section>
  );
};

export default ListaPacienteDetalle;
