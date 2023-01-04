import React from "react";
import "./NavList.css";
import NavItem from "../navItem/NavItem";

export default function NavList({ group }) {
  return (
    <ul>
      <li className="dropdown-heading">{group}</li>
      <li className="dropdown-links">
        <NavItem item="Playstation" />
        <NavItem item="Xbox" />
        <NavItem item="Nintendo" />
      </li>
    </ul>
  );
}
