import React, { useCallback, useRef } from "react";
import Question from "../Question/Question";
import { useQuestions } from "../../../lib/questions";
import "./QuestionList.css";

export default function QuestionList() {
  const { questions, addQuestions } = useQuestions();
  const observer = useRef();

  // launch the callback function each time a Question node is in the DOM
  const questionRef = useCallback((questionNode) => {
    // disconnect previously observed Question if any
    if (observer.current) observer.current.disconnect();

    // when the Question node is visible, add a new question
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        await addQuestions();
      }
    });

    if (questionNode) observer.current.observe(questionNode);
  }, []);

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
