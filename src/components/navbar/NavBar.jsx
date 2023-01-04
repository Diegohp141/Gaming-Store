import React from "react";
import logo from "../../img/storeLogo2.png";
import "./NavBar.css";
import NavList from "../navList/NavList";
import SearchBar from "../searchBar/SearchBar";
import LogIn from "../login/LogIn";
import CartWidget from "../cartWidget/CartWidget";
import { BiUserCircle } from "react-icons/bi";

export default function NavBar() {
  return (
    <nav className="header">
      <div className="dropdown">
        <button className="btn">Products</button>
        <div className="dropdown-menu information-grid">
          <NavList group="Consolas" />
          <NavList group="Videojuegos" />
        </div>
      </div>
      <img src={logo} alt="store logo" className="logo" />
      <SearchBar />
      <div className="dropdown cForm">
        <button className="login btn">
          <BiUserCircle />
          <span>Ingresar</span>
        </button>
        <div className="dropdown-menu ">
          <LogIn />
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}
