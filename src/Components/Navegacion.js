import React from "react";
import NavItem from "./NavItem";

function Navegacion() {
  return (
    <section>
      <nav className="navbar">
        <ul>
          <li>
            <div className="button">
              <button className="navbar-button" type="button">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <NavItem className="nav-list nav-item1" href="#Inicio">Inicio</NavItem>
          <NavItem className="nav-list nav-item2" href="#nosotros">Nosotros</NavItem>
          <NavItem className="nav-list nav-item3" href="#Servicios">Servicios</NavItem>
          <NavItem className="nav-list nav-item4" href="./servicios.html#Tomografia">Tomografia</NavItem>
          <NavItem className="nav-list nav-item5" href="./servicios.html#Escaneo">Escaneo</NavItem>
          <NavItem className="nav-list nav-item6" href="./servicios.html#Impresion3D">Impresion3D</NavItem>
          <NavItem className="nav-list nav-item7" href="./contacto.html">Contacto</NavItem>
        </ul>
      </nav>
      <div className="logo">    
        <a href="#Inicio"><img href="#Inicio" src="/media/i-logo.jpg"></img></a>
      </div>    
    </section>  
  );
}

export default Navegacion;
