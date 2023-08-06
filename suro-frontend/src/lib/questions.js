export const fetchRandomQuestions = async (nbQuestionsToFetch = 1) => {
  const response = await fetch('http://localhost:30000/questions/random?size=' + nbQuestionsToFetch);
  const randomQuestions = await response.json();
  return randomQuestions;
}