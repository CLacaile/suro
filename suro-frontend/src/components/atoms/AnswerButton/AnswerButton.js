import React from "react";
import PropTypes from "prop-types";
import { COLORS } from "../../../lib/colors";
import "./AnswerButton.css";

export default function AnswerButton({
  text,
  color = COLORS.WHITE,
  strikeText = false,
  onClick,
}) {
  return (
    <button
      className="answer"
      onClick={onClick}
      style={{ color: color, borderColor: color }}
    >
      {strikeText ? <strike>{text}</strike> : text}
    </button>
  );
}

AnswerButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(COLORS)),
  strikeText: PropTypes.bool,
  onClick: PropTypes.func,
};
