const { Router } = require("express");
const questionController = require("./question.controller");

const questionRouter = Router();

questionRouter.post("/create-question", questionController.createQuestion);
questionRouter.get("/", questionController.getQuestion);

module.exports = questionRouter;
