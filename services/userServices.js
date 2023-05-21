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

const changeAvatar = async (cloudinaryURL, _id) => {
  const avatarURL = cloudinaryURL;

  await User.findByIdAndUpdate(_id, { avatarURL })
    .then(() => {
      console.log('after update');
    })
    .catch(error => {
      console.log(error);
    });

  return { avatarURL };
};

module.exports = { updateUser, changeAvatar };
