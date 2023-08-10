import { useEffect, useState } from "react";

const fetchRandomQuestions = async (nbQuestionsToFetch = 1) => {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_SURO_API_URL +
      "/questions/random?size=" +
      nbQuestionsToFetch
  );
  const randomQuestions = await response.json();
  return randomQuestions;
};

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestions = async (qty = 1) => {
    const randomQuestions = await fetchRandomQuestions(qty);
    setQuestions((prevQuestions) => [...prevQuestions, ...randomQuestions]);
  };

  useEffect(() => {
    const fetchInitialQuestions = async () => {
      const randomQuestions = await fetchRandomQuestions(2);
      setQuestions(randomQuestions);
    };

    if (!questions.length) fetchInitialQuestions();
  }, []);

  return { questions, addQuestions };
};
