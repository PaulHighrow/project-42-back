const { User } = require('../db/models');

const changeAvatar = async (_id, avatarURL) => {
  return await User.findByIdAndUpdate(_id, avatarURL, { new: true });
};

module.exports = { changeAvatar };
