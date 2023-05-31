const asyncHandler = require('express-async-handler');
const { findUserPets } = require('../../services/userPetsService');

const getUserPets = asyncHandler(async (req, res) => {
  const { _id, name, email, phone, city, birthday, avatarURL, token } =
    req.user;

  const pets = await findUserPets(_id);

  res.json({
    status: 'success',
    code: 200,
    result: {
      user: {
        _id,
        token,
        email,
        name,
        phone,
        city,
        birthday,
        avatarURL,
      },
      pets,
    },
  });
});

module.exports = getUserPets;
