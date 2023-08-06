import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Question.css";
import AnswerButton from "../../atoms/AnswerButton/AnswerButton";
import BeautifulText from "../../atoms/BeautifulText/BeautifulText";
import NextQuestionButton from "../../atoms/NextQuestionButton/NextQuestionButton";
import { COLORS } from "../../../lib/colors";

export default function Question({ question, answers, onNextQuestion, backgroundColor }) {
  const [bgColor, setBgColor] = useState(backgroundColor);
  const [clickedAnswer, setClickedAnswer] = useState();

  const handleAnswerClick = (answer) => {
    setClickedAnswer(answer);
    setBgColor(answer.isCorrect ? COLORS.GREEN : COLORS.RED);
  };

  return (
    <div className="question-layout" style={{ backgroundColor: bgColor }}>
      <BeautifulText
        className="super-big-text"
        text={clickedAnswer ? "!!" : "?"}
      />
      <h1 className="question">{question}</h1>
      <div className="answers">
        {answers
          ? answers.map((answer) => (
              <AnswerButton
                key={"answer-" + answer.id}
                text={answer.label}
                strikeText={clickedAnswer ? !answer.isCorrect : false}
                onClick={() => handleAnswerClick(answer)}
              />
            ))
          : "Oups, il manque des réponses"}
      </div>
      <NextQuestionButton onClick={onNextQuestion} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onNextQuestion: PropTypes.func,
  backgroundColor: PropTypes.string
};
