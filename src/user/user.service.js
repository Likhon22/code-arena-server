const User = require("./user.model");



const createUserIntoDB = async (usersData) => {
  const result = await User.create(usersData);
  return result;
};

const userServices = {
  createUserIntoDB,
};

module.exports = userServices;
