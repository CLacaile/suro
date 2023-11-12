import React from "react";
import HomePage from "../HomePage/HomePage";
import QuestionPage from "../QuestionPage/QuestionPage";
import { useQuestions } from "../../../lib/useQuestions";
import { useIntersectionObserver } from "../../../lib/useIntersectionObserver";
import "./Pages.css";

export default function Pages() {
    const { questions, addQuestions } = useQuestions();

  // define a question ref so everytime a new question is a little bit display on the screen, we append a new question to the list
  const questionRef = useIntersectionObserver(addQuestions, { threshold: 0 });

  return (
    <div className="pages">
      <HomePage />
      {questions
        ? questions.map((question, index) => (
            <QuestionPage
              ref={questionRef}
              id={"question-" + index}
              key={"question-" + index}
              question={question.question}
              answers={question.answers}
            />
          ))
        : "Oups, pas de question"}
    </div>
  );
}
