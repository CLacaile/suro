const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({readOnly: true});

const PORT = 30000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
