import React from "react";
import "./NavItem.css";

export default function NavItem({ item }) {
  return <button className="link">{item}</button>;
}
