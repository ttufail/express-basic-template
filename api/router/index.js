const express = require("express");

const router = express.Router();

const users = require("../service");

// router.get("/users", users.getAllUsers);

// router.get("/:email", users.getSingleUser);

router.post("/addStudent", users.addStudent);

// router.delete("/empty",users.emptyDb)

module.exports = router;
