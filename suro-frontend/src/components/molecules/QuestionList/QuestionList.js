import React from "react";
import Question from "../Question/Question";
import { useQuestions } from "../../../lib/questions";
import "./QuestionList.css";
import { useIntersectionObserver } from "../../../lib/useIntersectionObserver.js";

export default function QuestionList() {
  const { questions, addQuestions } = useQuestions();

  // define a question ref so everytime a new question is entirely shown in the screen, we append a new question to the list
  const questionRef = useIntersectionObserver(addQuestions);

  return (
    <div className="question-list">
      {questions
        ? questions.map((question, index) => (
            <Question
              ref={questionRef}
              id={"question-" + question.id}
              key={"question-" + index}
              question={question.question}
              answers={question.answers}
            />
          ))
        : "Oups, pas de question"}
    </div>
  );
}
