import React from "react";
import PropTypes from "prop-types";

export default function ErrorFallback({ error }) {
  const errorStyle = {
    width: "80%",
    backgroundColor: "#FFBBBB",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div role="alert" style={errorStyle}>
      <h4>❌ Something went wrong:</h4>
      <code>{error.toString()}</code>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}