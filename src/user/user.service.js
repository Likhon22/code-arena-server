const Answer = require("../answer/answer.model");
const Question = require("../question/question.model");
const User = require("./user.model");

const createUserIntoDB = async (usersData) => {
  const result = await User.create(usersData);
  return result;
};

const getUserStatsFromDB = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    return;
  }

  // Get total questions by email
  const totalQuestions = await Question.countDocuments({ email: email });

  // Get total answers by email
  const totalAnswers = await Answer.countDocuments({ email: email });
  const data = {
    totalAnswers,
    totalQuestions,
  };
  return data;
};

const userServices = {
  createUserIntoDB,
  getUserStatsFromDB,
};

module.exports = userServices;
