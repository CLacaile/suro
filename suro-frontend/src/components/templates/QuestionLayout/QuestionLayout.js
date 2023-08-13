import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./QuestionLayout.css";
import { COLORS } from "../../../lib/colors";

const QuestionLayout = forwardRef(({
  header,
  question,
  answers,
  backgroundColor,
}, ref) => {
  return (
    <div ref={ref} className="question-layout" style={{ backgroundColor }}>
      {header}
      {question}
      {answers}
    </div>
  );
});

QuestionLayout.displayName = "QuestionLayout";

QuestionLayout.propTypes = {
  header: PropTypes.node,
  question: PropTypes.node,
  answers: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.values(COLORS)),
};

export default QuestionLayout;