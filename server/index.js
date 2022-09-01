//https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node
const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const port = 443;

app.get("/", (req, res) => {
  res.send("IT'S WORKING!");
  console.log(req.headers);
  console.log(res);
});

app.get("/api", (req, res) => {
  res.send({
    name: "Megan",
    age: 38,
  });
});

const httpsOptions = {
  key: fs.readFileSync(__dirname + "\\ssl\\localhost.key"),
  cert: fs.readFileSync(__dirname + "\\ssl\\localhost.crt"),
};

const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log("server running at " + port);
});
