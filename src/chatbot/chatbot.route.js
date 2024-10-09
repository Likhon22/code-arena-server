const { Router } = require("express");
const chatbotControl = require("./chatbot.controller");

const chatbotRouter = Router();

chatbotRouter.get("/", chatbotControl.chatbot);
chatbotRouter.get("/question", chatbotControl.chatbotQuestion);

module.exports = chatbotRouter;
