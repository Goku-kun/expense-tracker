import React from "react";
import "./Header.css";

function Header({ heading }) {
  return (
    <header>
      <h2>{heading}</h2>
    </header>
  );
}

export default Header;
