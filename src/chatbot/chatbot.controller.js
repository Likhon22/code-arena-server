const knowledgeBase = require("./knowledgebase");

const chatbot = async (req, res) => {
  const question = req.query.question;

  if (!question) {
    return res.status(400).json("Question is required.");
  }

  const formattedQuestion = question.toLowerCase().trim();
  const formattedQuestionWithQuestionMark = formattedQuestion.endsWith("?")
    ? formattedQuestion
    : formattedQuestion + "?";

  // Look for the answer in the knowledge base
  if (knowledgeBase.hasOwnProperty(formattedQuestionWithQuestionMark)) {
    res.json(knowledgeBase[formattedQuestionWithQuestionMark]);
  } else {
    res.status(404).json("Sorry, I don't have an answer to that question.");
  }
};

const chatbotQuestion = async (req, res) => {
  const questions = Object.keys(knowledgeBase);
  res.send(questions);
};
const chatbotControl = {
  chatbot,
  chatbotQuestion,
};

module.exports = chatbotControl;
