const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.get("/Forget",authController.getForgetPassword);
module.exports = router ;