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


const userController = {
  createUser,
};

module.exports = userController;
