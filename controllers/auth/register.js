const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const gravatar = require('gravatar');

const { User } = require('../../db/models');
const { findUserByEmail } = require('../../services/authService');
const { joiSignupSchema } = require('../../schemas');
const getError = require('../../helpers/getError');
const { generateToken } = require('../../helpers/generateToken');

const register = asyncHandler(async (req, res) => {
  const { error } = joiSignupSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: getError(error, 'signup') });
  }

  const { email, password } = req.body;
  const user = await findUserByEmail({ email });

  if (user) {
    return res.status(409).json({ message: `Email or password is wrong` });
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const [name, _] = email.split('@').slice(0, 1);
  const newUser = await User.create({
    ...req.body,
    name: name,
    password: hashPassword,
    avatarURL,
  });

  const { token } = await generateToken(newUser._id);
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    status: 'success',
    code: 201,
    token,
    result: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      avatarURL: newUser.avatarURL
    },
  });
});

module.exports = register;
