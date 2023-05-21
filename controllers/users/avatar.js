const { changeAvatar } = require('../../services/userServices');

const avatar = async ({ file: { path: cloudinaryURL }, user: { _id } }) => {
  return await changeAvatar(cloudinaryURL, _id);
};

module.exports = {
  avatar,
};
