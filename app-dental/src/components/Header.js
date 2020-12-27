import React from "react";
import logo from "../images/logo-dent.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fondo-cyan">
      <a className="navbar-brand" href="/#">
        <img src={logo} alt="" width="35px" height="35px" />
        <span>MediDent</span>
      </a>
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
          <li className="nav-item active">
            <a className="nav-link" href="/#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Pacientes
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              Citas
            </a>
          </li>
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
