import React from "react";
import Question from "../Question/Question";
import { useQuestions } from "../../../lib/questions";

export default function QuestionList() {
  const { questions, addQuestions } = useQuestions();

  const onNextQuestion = async () => {
    await addQuestions();
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
              />
            );
          })
        : "Oups, pas de question"}
    </div>
  );
}
