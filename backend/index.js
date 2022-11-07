const express = require("express");

const app = express();
const http = require("http");

const { sequelize, Sequelize } = require("./models");

const PORT = process.env.PORT || 8000;

app.use(express.json());

const server = http.createServer(app);
global.io = require("socket.io")(server);

sequelize.sync({ force: true }).then(() => {
  console.log("Successfully connected to DB");
  server.listen(PORT, () => {
    console.log("Backend server running on ", PORT);
  });
});
