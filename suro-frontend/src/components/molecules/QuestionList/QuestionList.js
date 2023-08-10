import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import { useQuestions } from "../../../lib/questions";
import { getRandomColor } from "../../../lib/colors";

export default function QuestionList() {
  const [bgColor, setBgColor] = useState();
  const {questions, addQuestions} = useQuestions();

  useEffect(() => {
    if (!bgColor) setBgColor(getRandomColor());
  }, []);

  const onNextQuestion = async () => {
    //const newQuestions = await fetchRandomQuestions();
    await addQuestions();
   //setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
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
