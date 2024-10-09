const { Router } = require("express");
const answerController = require("./answer.controller");

const answerRouter = Router();

answerRouter.post("/create-answer", answerController.createAnswer);
answerRouter.get("/:questionId", answerController.getAnswer);

module.exports = answerRouter;
