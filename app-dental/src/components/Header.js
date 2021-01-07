import React, { useState } from "react";
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
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/ListaPacientes">
              Pacientes
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/HistoriasClinicas">
              Historias Clinicas
            </NavLink>
          </li>
          {/* <li className="nav-item ">
            <Link className="nav-link" to="/Citas">
              Citas
            </Link>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
