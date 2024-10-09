const { Router } = require("express");
const userController = require("./user.controller");

const userRouter = Router();

userRouter.post("/create-user", userController.createUser);

module.exports = userRouter;
