const { User } = require('../db/models');
const cloudinary = require('cloudinary').v2;

const findUserByEmail = async ({ email }) => {
  const user = await User.findOne({ email });
  return user;
};

const registerNewUser = async ({ email, password, name }) => {
  return await User.create({ name, email, password });
};

const loginUser = async (_id, token) => {
  await User.findByIdAndUpdate(_id, token);
};

const logoutUser = async _id =>
  await User.findByIdAndUpdate(_id, { token: null });

const findUserById = async _id => {
  const user = await User.findById(_id);
  return user;
};

const updateUserById = async (_id, { name, email, birthday, phone, city, avatarURL, imgId }) => {
  const user = await User.findOneAndUpdate(
    _id,
    {
      name,
      email,
      birthday,
      phone,
      city,
      avatarURL,
      imgId,
    },
    {
      new: true,
    }
  );

  return user;
};

module.exports = {
  findUserByEmail,
  registerNewUser,
  loginUser,
  logoutUser,
  findUserById,
  updateUserById,
};
