import React from "react";
import PropTypes from "prop-types";
import "./BeautifulText.css";

export default function BeautifulText({ className, text }) {
  return <span className={"beautiful-text " + className}>{text}</span>;
}

BeautifulText.propTypes = {
  className: PropTypes.oneOf(["big-text", "md-text", "super-big-text"]),
  text: PropTypes.string.isRequired,
};
