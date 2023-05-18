const User = require("../db/models/userModel");

const findUser = async (email) => {
  return await User.findOne({ email });
};

const createUser = async (body) => {
  return await User(body).save();
};

const loginUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

const logoutUser = async (id, update) => {
  return await User.findByIdAndUpdate(id, update, { new: true });
};

const updateSubscription = async (id, update) => {
  return await User.findByIdAndUpdate(id, update, { new: true });
};

module.exports = {
  findUser,
  createUser,
  loginUser,
  logoutUser,
  updateSubscription,
};
