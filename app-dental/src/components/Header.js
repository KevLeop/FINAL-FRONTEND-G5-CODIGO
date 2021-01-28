import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo-dent.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fondo-cyan">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" width="35px" height="35px" />
        <span>MediDent</span>
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/admin/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/admin/ListaPacientes">
              Pacientes
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/admin/HistoriasClinicas">
              Historias Clinicas
            </NavLink>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/Citas">
              Citas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
