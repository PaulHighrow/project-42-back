const { User } = require('../db/models');

const updateUser = async (
  _id,
  { name, email, birthday, phone, city, avatarURL, imgId }
) => {
  const user = await User.findOneAndUpdate(
    _id,
    {
      name,
      email,
      birthday,
      phone,
      city,
      avatarURL,
    },
    {
      new: true,
    }
  );

  return user;
};

const changeAvatar = async (_id, avatarURL) => {
  return await User.findByIdAndUpdate(_id, avatarURL, { new: true });
};

module.exports = { updateUser, changeAvatar };
