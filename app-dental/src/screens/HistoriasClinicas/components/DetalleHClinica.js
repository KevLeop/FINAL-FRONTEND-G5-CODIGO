import React from "react";

const DetalleHClinica = () => {
  return (
    <section className="col-md-3">
      <div className="card shadow">
        <div className="card-body">
          <form>
            <div class="form-group">
            <label htmlfor="">Nombre del Paciente</label>
              <input type="text" name="" id="hcliPaciente" class="form-control" placeholder="Nombre del Paciente" aria-describedby="helpId"/>
              <br/>
              <label htmlfor="">Fecha</label>
              <input type="date" name="" id="fecha" class="form-control" placeholder="Fecha" aria-describedby="helpId"/>
              <br/>
              <label htmlfor="">Problema</label>
              <input type="text" name="" id="problema" class="form-control" placeholder="Problema" aria-describedby="helpId"/>
              <br/>
              <label htmlfor="">Diagnostico</label>
              <input type="text" name="" id="diagnostico" class="form-control" placeholder="Diagnostico" aria-describedby="helpId"/>
              <br/> 
              <label htmlfor="">Tratamiento</label>
              <input type="text" name="" id="tratamiento" class="form-control" placeholder="Tratamiento" aria-describedby="helpId"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DetalleHClinica;
