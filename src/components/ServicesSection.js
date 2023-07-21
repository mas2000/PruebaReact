import React from 'react';

function ServicesSection() {
  return (
    <section>
      <h2>Servicios</h2>
      <div className="container">
        {/* Contenido de los servicios */}
        <span className="text">Agua corriente</span>
        <span className="text">Gas natural</span>
        <span className="text">Internet</span>
        <span className="text">Luz</span>
      </div>
      <br />
      <hr />
      <br />

      {/* ... Resto del contenido de la sección de servicios */}
    </section>
  );
}

export default ServicesSection;
