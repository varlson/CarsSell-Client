import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBAr() {
  return (
    <div className="m-auto bg-gray-900 ">
      <div className="w-10/12 m-auto p-2 grid grid-cols-12">
        <Link to="/">
          <span className="nav-item text-red-400 text-4xl ">LOGO</span>
        </Link>
        <div className="col-start-8">
          <ul className="text-red-400 text-xl flex">
            <Link to="/carros">
              <li className="nav-item">Carros</li>
            </Link>
            <li className="nav-item">Contatos</li>
            <li className="nav-item">Sobre</li>
            <li className="nav-item">Carros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBAr;
