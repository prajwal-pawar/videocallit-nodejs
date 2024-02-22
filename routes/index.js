const express = require("express");
const router = express.Router();

// home controller
const homeController = require("../controllers/home_controller");

// redirect to room
router.get("/", homeController.home);

// render room
router.get("/:room", homeController.room);

module.exports = router;
