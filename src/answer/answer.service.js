const Answer = require("./answer.model");

const createAnswerIntoDB = async (answersData) => {
  const result = await Answer.create(answersData);
  return result;
};

const getAnswerFromDB = async (questionId) => {
  const result = await Answer.find({ questionId: questionId });
  return result;
};

const answerServices = {
  createAnswerIntoDB,
  getAnswerFromDB,
};

module.exports = answerServices;
