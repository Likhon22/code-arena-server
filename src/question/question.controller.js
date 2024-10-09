const questionServices = require("./question.service");

const createQuestion = async (req, res) => {
  const question = req.body;
  console.log(question);

  try {
    const newQuestion = await questionServices.createQuestionIntoDB(question);
    res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: newQuestion,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getQuestion = async (req, res) => {
  try {
    const response = await questionServices.getQuestionFromDB();
    res.json({
      success: true,
      message: "Question retrieved successfully",
      data: response,
    });
  } catch (e) {
    console.error("An error occurred while getting a question:", e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while getting a question",
    });
  }
};

const questionController = {
  createQuestion,
  getQuestion,
};

module.exports = questionController;
