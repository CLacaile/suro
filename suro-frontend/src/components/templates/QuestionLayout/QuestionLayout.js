import React from "react";
import PropTypes from "prop-types";
import "./QuestionLayout.css";
import { COLORS } from "../../../lib/colors";

export default function QuestionLayout({
  header,
  question,
  answers,
  nextQuestionButton,
  backgroundColor,
}) {
  return (
    <div className="question-layout" style={{ backgroundColor }}>
      {header}
      {question}
      {answers}
      {nextQuestionButton}
    </div>
  );
}

QuestionLayout.propTypes = {
  header: PropTypes.node,
  question: PropTypes.node,
  answers: PropTypes.node,
  nextQuestionButton: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.values(COLORS)),
};
