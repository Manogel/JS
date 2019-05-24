const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = "GoNode";

  return next();
};

app.use(logMiddleware);

//http://localhost:3000/?name=Diego
app.get("/", (req, res) => {
  return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`);
});

//http://localhost:3000/nome/manogel
app.get("/nome/:name", (req, res) => {
  return res.send(`nome: ${req.params.name}`);
});

//http://localhost:3000/nome/manogel
app.get("/nome2/:name", (req, res) => {
  return res.json({
    message: `Welcome, ${req.params.name}`
  });
});

app.listen(3000);
