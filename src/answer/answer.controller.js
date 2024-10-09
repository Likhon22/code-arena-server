const answerServices = require("./answer.service");

const createAnswer = async (req, res) => {
  try {
    const answer = req.body;
    console.log(answer);

    const response = await answerServices.createAnswerIntoDB(answer);
    return res.status(200).json({
      success: true,
      message: "answer created successfully",
      data: response,
    });
  } catch (e) {
    console.error("An error occurred while creating a answer:", e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating a answer",
    });
  }
};
// get answers

const getAnswer = async (req, res) => {
  const { questionId } = req.params;
  try {
    const response = await answerServices.getAnswerFromDB(questionId);
    res.json({
      success: true,
      message: "answer retrieved successfully",
      data: response,
    });
  } catch (e) {
    console.error("An error occurred while getting a answer:", e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while getting a answer",
    });
  }
};
const answerController = {
  createAnswer,
  getAnswer,
};

module.exports = answerController;
