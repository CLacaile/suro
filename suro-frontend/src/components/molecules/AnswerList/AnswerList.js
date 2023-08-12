import React from "react";
import PropTypes from "prop-types";
import AnswerButton from "../../atoms/AnswerButton/AnswerButton";
import { COLORS } from "../../../lib/colors";

export default function AnswerList({ answers, selectedAnswer, onAnswerClick }) {

  const determineButtonColor = (answer) => {
    if (selectedAnswer && !selectedAnswer.isCorrect && answer.isCorrect) {
      return COLORS.LIME_GREEN;
    }
    return COLORS.WHITE;
  };

  return (
    <div className="answers">
      {answers && answers.length > 0 ? (
        answers.map((answer) => (
          <AnswerButton
            key={"answer-" + answer.id}
            text={answer.label}
            strikeText={selectedAnswer ? !answer.isCorrect : false}
            color={determineButtonColor(answer)}
            onClick={() => onAnswerClick(answer)}
          />
        ))
      ) : (
        <p>Oups, il manque des réponses</p>
      )}
    </div>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.array,
  selectedAnswer: PropTypes.object,
  onAnswerClick: PropTypes.func.isRequired,
};
