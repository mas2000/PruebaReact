import React from 'react';

function AmbientsSection() {
  return (
    <section>
      <h2>Ambientes</h2>
      <div className="container">
        {/* Contenido de los ambientes */}
        <span className="text">Cocina</span>
        <span className="text">Comedor</span>
        <span className="text">Escritorio</span>
        <span className="text">Lavadero</span>
        <span className="text">Living comedor</span>
        <span className="text">Living</span>
        <span className="text">Toilette</span>
      </div>
      <br />
      <hr />
      <br />

      {/* ... Resto del contenido de la sección de ambientes */}
    </section>
  );
}

export default AmbientsSection;
