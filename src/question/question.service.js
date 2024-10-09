const Question = require("./question.model");

const createQuestionIntoDB = async (questionData) => {
  const response = await Question.create(questionData);
  return response;
};

const getQuestionFromDB = async (question) => {
  const response = await Question.find(question);
  return response;
};

const questionServices = {
  createQuestionIntoDB,
  getQuestionFromDB,
};

module.exports = questionServices;
