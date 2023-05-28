const asyncHandler = require('express-async-handler');

const { findUserByEmail } = require('../../services/authService');

const current = asyncHandler(async (req, res) => {
  const { token } = req.user;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  const { email } = req.user;
  const user = await findUserByEmail({ email });

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.json({
    status: 'success',
    code: 200,
    token,
    result: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      birthday: user.birthday,
      avatarURL: user.avatarURL,
      favorite: user.favorite,
    },
  });
});

// const getCurrentUser = async (
//   _id,
//   name,
//   email,
//   birthday,
//   phone,
//   city,
//   avatarURL
// ) => {
//   return await {
//     user: { _id, name, email, birthday, phone, city, avatarURL },
//   };
// };

// const current = async ({
//   user: { _id, name, email, birthday, phone, city, avatarURL },
// }) => await getCurrentUser(_id, name, email, birthday, phone, city, avatarURL);

module.exports = current;
