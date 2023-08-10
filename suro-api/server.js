require('dotenv').config();
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({readOnly: true});

const DEFAULT_PORT = 30000;
const PORT = process.env.PORT ?? DEFAULT_PORT;

server.use(middlewares);

server.get("/questions/count", (req, res) => {
  const questions = router.db.get("questions");
  const totalQuestions = questions.size();
  res.json({ count: totalQuestions });
});

server.get("/questions/random", (req, res) => {
  const { size } = req.query;
  const numQuestions = parseInt(size, 10) || 1;

  const totalQuestions = router.db.get("questions").size().value();

  // Générer un certain nombre d'indexes aléatoires pour sélectionner les questions aléatoires
  const randomIndexes = [];
  while (randomIndexes.length < numQuestions) {
    const randomIndex = Math.floor(Math.random() * totalQuestions);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  // Effectuer une requête à la base de données pour obtenir les questions aléatoires
  const randomQuestions = randomIndexes.map((index) =>
    router.db.get("questions").nth(index).value()
  );

  res.json(randomQuestions);
});

server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
