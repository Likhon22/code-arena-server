const { Router } = require("express");
const userController = require("./user.controller");

const userRouter = Router();

userRouter.post("/create-user", userController.createUser);
userRouter.get("/data/:email", userController.getUserStats);
module.exports = userRouter;
