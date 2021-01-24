import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import historiasClinicasContext from "../../../contexts/historiasClinicasContext";
import { putHclinica } from "../../../services/historiasClinicasService";
import moment from "moment";

const HClinicaFormEditar = () => {
  const {
    hClinicasEditar,
    setModalEditarHClinica,
    obtenerHClinicas,
  } = useContext(historiasClinicasContext);
  const [formEditar, setFormEditar] = useState({
    ...hClinicasEditar,
  });

  const handleChange = (e) => {
    setFormEditar({
      ...formEditar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de editar paciente",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: "true",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        putHclinica({ ...formEditar }).then((data) => {
          if (data.id_hclinica) {
            setModalEditarHClinica(false);
            obtenerHClinicas();
            Swal.fire({
              title: "Editado",

              icon: "success",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 800,
            });
          }
        });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlfor="">Codigo de Paciente</label>
          <input
            type="text"
            name="id_paciente"
            id="id_paciente"
            class="form-control"
            placeholder="Id de Paciente"
            aria-describedby="helpId"
            value={formEditar.id_paciente}
            onChange={handleChange}
          />
      </div>
      <div className="form-group">
      <label htmlfor="">Fecha</label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            class="form-control"
            placeholder="Fecha"
            aria-describedby="helpId"
            value={formEditar.fecha}
            onChange={handleChange}
          />
      </div>
      <div>
      <label htmlfor="">Problema</label>
              <input
                type="text"
                name="problema"
                id="problema"
                class="form-control"
                placeholder="Problema"
                aria-describedby="helpId"
                value={formEditar.problema}
                onChange={handleChange}
              />
      </div>
      <div className="form-group">
        <label htmlfor="">Diagnostico</label>
          <input
            type="text"
            name="diagnostico"
            id="diagnostico"
            class="form-control"
            placeholder="Diagnostico"
            aria-describedby="helpId"
            value={formEditar.diagnostico}
            onChange={handleChange}
          />
      </div>
      <div className="form-group">
      <label htmlfor="">Tratamiento</label>
            <input
              type="text"
              name="tratamiento"
              id="tratamiento"
              className="form-control"
              placeholder="Tratamiento"
              aria-describedby="helpId"
              value={formEditar.tratamiento}
              onChange={handleChange}
            />
      </div>
      <div className="form-group">
      <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                  name="pagado"
                  value={formEditar.pagado}
                  onChange={handleChange}
                />
                <label class="custom-control-label" for="customSwitch1">
                  Pago Realizado
                </label>
              </div>
      </div>
      <div className="form-group d-flex justify-content-between">
        <button className="btn btn-primary" type="submit">
          Guardar cambios
        </button>
      </div>
    </form>
  );
};

export default HClinicaFormEditar;