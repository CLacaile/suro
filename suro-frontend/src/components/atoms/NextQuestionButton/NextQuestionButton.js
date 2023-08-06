import React from "react";
import PropTypes from "prop-types";
import "./NextQuestionButton.css";

export default function NextQuestionButton({ onClick = () => {} }) {
  
  const handleClick = () => {
    // perform whatever is passed from parent
    onClick();
    // handle scrolling animation
    const distanceToScroll = window.innerHeight;
    const scrollOptions = {
      top: window.scrollY + distanceToScroll,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };
  return (
    <button className="nextQuestion" onClick={handleClick}>
      V
    </button>
  );
}

NextQuestionButton.propTypes = {
  onClick: PropTypes.func,
};
