const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have a new connection !!!");

  socket.on("disconnect", () => {
    console.log("user had left!!");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`the server is up and running on port ${PORT}`);
});
