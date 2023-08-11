import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Question.css";
import AnswerButton from "../../atoms/AnswerButton/AnswerButton";
import BeautifulText from "../../atoms/BeautifulText/BeautifulText";
import NextQuestionButton from "../../atoms/NextQuestionButton/NextQuestionButton";
import { COLORS, getRandomColor } from "../../../lib/colors";

export default function Question({ question, answers, onNextQuestion }) {
  const [shuffledAnswers, setShuffledAnswers] = useState();
  const [bgColor, setBgColor] = useState();
  const [clickedAnswer, setClickedAnswer] = useState();

  useEffect(() => {
    if (!bgColor) setBgColor(getRandomColor());
  }, [])

  useEffect(() => {
    setShuffledAnswers(answers.sort(() => 0.5 - Math.random()));
  }, [answers]);

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
        {shuffledAnswers
          ? shuffledAnswers.map((answer) => (
              <AnswerButton
                key={"answer-" + answer.id}
                text={answer.label}
                strikeText={clickedAnswer ? !answer.isCorrect : false}
                color={(clickedAnswer && !clickedAnswer.isCorrect && answer.isCorrect) ? "limegreen" : COLORS.WHITE}
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
  onNextQuestion: PropTypes.func
};
