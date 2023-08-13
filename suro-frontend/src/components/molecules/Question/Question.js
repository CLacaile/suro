import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Question.css";
import BeautifulText from "../../atoms/BeautifulText/BeautifulText";
import { COLORS, getRandomColor } from "../../../lib/colors";
import AnswerList from "../AnswerList/AnswerList";
import QuestionLayout from "../../templates/QuestionLayout/QuestionLayout";

const Question = forwardRef(({ question, answers }, ref) => {
  const [shuffledAnswers, setShuffledAnswers] = useState();
  const [bgColor, setBgColor] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();

  useEffect(() => {
    if (!bgColor) setBgColor(getRandomColor());
  }, []);

  useEffect(() => {
    setShuffledAnswers(answers.sort(() => 0.5 - Math.random()));
  }, [answers]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setBgColor(answer.isCorrect ? COLORS.GREEN : COLORS.RED);
  };

  return (
    <QuestionLayout
      ref={ref}
      header={
        <BeautifulText
          className="super-big-text"
          text={selectedAnswer ? "!!" : "?"}
        />
      }
      question={<h1 className="question">{question}</h1>}
      answers={
        <AnswerList
          answers={shuffledAnswers}
          selectedAnswer={selectedAnswer}
          onAnswerClick={handleAnswerClick}
        />
      }
      nextQuestionButton={<></>}
      backgroundColor={bgColor}
    />
  );
});

Question.displayName = "Question";

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
};


export default Question;