// initialize socket client
const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);

// when new user connects to room
socket.on("user-connected", (userId) => {
  console.log("user conn", userId);
});
