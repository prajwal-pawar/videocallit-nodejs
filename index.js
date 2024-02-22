const express = require("express");

const app = express();

const PORT = 3000;

// initialize websocket
const server = require("http").Server(app);
const io = require("socket.io")(server);

// set view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));

// using routes
app.use("/", require("./routes"));

// when user connects
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);

    // when new user connects
    socket.to(roomId).emit("user-connected", userId);
  });
});

// start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
