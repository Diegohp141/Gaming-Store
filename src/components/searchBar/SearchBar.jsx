import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBarC">
      <input
        className="input"
        type="text"
        name="search"
        placeholder="Buscá tu producto"
      />
      <button className="sBtn">
        <BsSearch />
      </button>
    </div>
  );
}
