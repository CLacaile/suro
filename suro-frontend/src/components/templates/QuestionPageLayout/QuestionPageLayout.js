import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./QuestionPageLayout.css";
import { COLORS } from "../../../lib/colors";

const QuestionPageLayout = forwardRef(({
  id,
  header,
  question,
  answers,
  backgroundColor,
}, ref) => {
  return (
    <section id={id} ref={ref} className="question-page-layout" style={{ backgroundColor }}>
      {header}
      {question}
      {answers}
    </section>
  );
});

QuestionPageLayout.displayName = "QuestionLayout";

QuestionPageLayout.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.node,
  question: PropTypes.node,
  answers: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.values(COLORS)),
};

export default QuestionPageLayout;