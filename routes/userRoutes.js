const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/niraj",userController.getNiraj);
router.get("/login",userController.getLogin);


module.exports = router;

