const express = require("express");
const userController = require("../controllers/userController")
const userRouter = express.Router();

userRouter.route("/create").post(userController.addUser);
userRouter.route("/findByEmail/:email").get(userController.findByEmail);

module.exports = userRouter;