const { v4: uuidV4 } = require("uuid");

// redirect to room
module.exports.home = (req, res) => {
  const randomRoomId = uuidV4();
  return res.redirect(`/${randomRoomId}`);
};

// render room
module.exports.room = (req, res) => {
  return res.render("room", {
    roomId: req.params.room,
  });
};
