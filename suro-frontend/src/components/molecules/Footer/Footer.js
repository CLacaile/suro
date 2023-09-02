import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="footer">
      <a href="https://github.com/clacaile">clacaile</a> - 2023 - {process.env.REACT_APP_VERSION}
    </p>
  );
}
