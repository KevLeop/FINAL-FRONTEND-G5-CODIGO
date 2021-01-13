import React, { useContext, useState } from "react";
import { posthClinica } from '../../../services/historiasClinicasService';
import Swal from "sweetalert2";
import HistoriasClinicasContext from "../../../contexts/historiasClinicasContext";

const DetalleHClinica = () => {

  const formularioVacio = {
    id_paciente: 1,
    fecha:"",
    problema:"",
    diagnostico:"",
    tratamiento:"",
    pagado:false
  }

  const [formulario,setFormulario] = useState(formularioVacio)
  const [obtenerHClinicas] = useContext(HistoriasClinicasContext)

  const handleChange = (e) =>{
    setFormulario({
      ...formulario,
      [e.target.id]: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de editar paciente",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: "true",
    }).then((rpta) => {
      if (rpta.isConfirmed) {

        posthClinica(formulario).then(data =>{
          if(data.id_hclinica){
            setFormulario(formularioVacio);
            obtenerHClinicas();
          }
        })
      }
    });
  }

  return (
    <section className="col-md-3">
      <div className="card shadow">
        <div className="card-body">
          <h2>Crear Nueva Historia Clinica</h2>
          
          <form onSubmit={submit}>
            <div class="form-group">
            <label htmlfor="">Nombre del Paciente</label>
              <input type="text" name="id_paciente" id="id_paciente" class="form-control" placeholder="Id de Paciente" aria-describedby="helpId" 
              value={formulario.id_paciente} onChange={handleChange}/>
              <br/>
              <label htmlfor="">Fecha</label>
              <input type="date" name="fecha" id="fecha" class="form-control" placeholder="Fecha" aria-describedby="helpId" 
              value={formulario.fecha} onChange={handleChange}/>
              <br/>
              <label htmlfor="">Problema</label>
              <input type="text" name="problema" id="problema" class="form-control" placeholder="Problema" aria-describedby="helpId" 
              value={formulario.problema} onChange={handleChange}/>
              <br/>
              <label htmlfor="">Diagnostico</label>
              <input type="text" name="diagnostico" id="diagnostico" class="form-control" placeholder="Diagnostico" aria-describedby="helpId" 
              value={formulario.diagnostico} onChange={handleChange}/>
              <br/> 
              <label htmlfor="">Tratamiento</label>
              <input type="text" name="tratamiento" id="tratamiento" class="form-control" placeholder="Tratamiento" aria-describedby="helpId" 
              value={formulario.tratamiento} onChange={handleChange}/>
              <br/> 
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" name="pagado" value={formulario.pagado} onChange={handleChange}/>
                <label class="custom-control-label" for="customSwitch1">Pago Realizado</label>
              </div>
              <br/>
              <button type="submit" class="btn btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DetalleHClinica;
