const { findUserByEmail } = require('../../services/authService');

const current = async (req, res, __) => {
  const { email } = req.user;
  const user = await findUserByEmail({ email });

  res.json({
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.city,
    birthday: user.birthday,
    avatarURL: user.avatarURL,
    favorite: user.favorite,
  });
};

module.exports = current;
