const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");


router.get("/ChangePassword",todoController.getChangePassword);
module.exports= router;