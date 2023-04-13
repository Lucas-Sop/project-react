import React from "react";

function Formulario() {
  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />

      <label htmlFor="correo">Correo electrónico:</label>
      <input type="email" id="correo" name="correo" />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje"></textarea>

      <button>Enviar mensaje</button>
    </form>
  );
}

export default Formulario;