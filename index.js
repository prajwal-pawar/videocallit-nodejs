const express = require("express");

const app = express();

const PORT = 3000;

// initialize websocket
const server = require("http").Server(app);
const io = require("socket.io")(server);

// start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
