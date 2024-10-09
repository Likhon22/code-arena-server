const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./src/user/user.routes");
const questionRouter = require("./src/question/question.route");
const answerRouter = require("./src/answer/answer.route");
const chatbotRouter = require("./src/chatbot/chatbot.route");
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

connectDB();

// routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/answers", answerRouter);
app.use("/api/v1/chatbot", chatbotRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
