import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import { fetchRandomQuestions } from "../../../lib/questions";
import { getRandomColor } from "../../../lib/colors";

export default function QuestionList() {
  const [bgColor, setBgColor] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    if (!questions) setQuestions(fetchRandomQuestions(2));
    if (!bgColor) setBgColor(getRandomColor());
  }, []);

  const onNextQuestion = () => {
    const newQuestions = fetchRandomQuestions();
    setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
    const randomColor = getRandomColor(bgColor);
    setBgColor(randomColor);
  };

  return (
    <div className="question-container">
      {questions
        ? questions.map((question, index) => {
            return (
              <Question
                id={"question-" + question.id}
                key={"question-" + index}
                question={question.question}
                answers={question.answers}
                onNextQuestion={onNextQuestion}
                backgroundColor={bgColor}
              />
            );
          })
        : "Oups, pas de question"}
    </div>
  );
}