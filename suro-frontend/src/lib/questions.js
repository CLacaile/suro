export const fetchRandomQuestions = async (nbQuestionsToFetch = 1) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(process.env.REACT_APP_SURO_API_URL + '/questions/random?size=' + nbQuestionsToFetch);
  const randomQuestions = await response.json();
  return randomQuestions;
}