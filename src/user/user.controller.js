const userServices = require("./user.service");

const createUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);

    const response = await userServices.createUserIntoDB(user);
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: response,
    });
  } catch (e) {
    console.error("An error occurred while creating a user:", e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating a user",
    });
  }
};
const getUserStats = async (req, res) => {
  const { email } = req.params;
  try {
    const response = await userServices.getUserStatsFromDB(email);
    res.json({
      success: true,
      message: "User stats retrieved successfully",
      data: response,
    });
  } catch (e) {
    console.error("An error occurred while getting user stats:", e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while getting user stats",
    });
  }
};

const userController = {
  createUser,
  getUserStats,
};

module.exports = userController;
