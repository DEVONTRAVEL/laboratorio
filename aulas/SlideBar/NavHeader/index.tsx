import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgHeader from "_assets/img/logo-branca.png";
import { HeaderImage } from "./estilo";

function NavHeader() {
  const [showMenuUser, setShowMenuUser] = useState(false);

  return (
    <li
      className="nav-header justify-content-center"
      style={{ display: "flex" }}
    >
      <div className={`dropdown profile-element ${showMenuUser ? "show" : ""}`}>
        <HeaderImage alt="imagePerfil" src={imgHeader} />
        <Link
          to="#"
          data-toggle="dropdown"
          className="dropdown-toggle"
          aria-expanded="true"
        >
          <span className="block m-t-xs font-bold"></span>
          <span
            className="text-muted text-xs block"
            onClick={() => setShowMenuUser(!showMenuUser)}
          ></span>
        </Link>
        <ul
          className={`dropdown-menu animated fadeInRight m-t-xs ${
            showMenuUser ? "show" : ""
          }`}
        ></ul>
      </div>
      <HeaderImage alt="imagePerfil" className="logo-element" src={imgHeader} />
    </li>
  );
}

export default NavHeader;
