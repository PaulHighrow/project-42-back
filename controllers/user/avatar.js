const HttpError = require('../../helpers/httpError');
const { changeAvatar } = require('../../services/userServices');

const avatar = async (req, res, next) => {
  if (!req.file) {
    next(HttpError(400, 'Please provide a file'));
  }

  const avatarURL = req.file.path;

  await changeAvatar(req.user._id, { avatarURL });
  res.status(200).json({ avatarURL });
};

module.exports = {
  avatar,
};
