const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { findUserByEmail } = require('../../services/authService');
const { joiSignupSchema } = require('../../schemas');
const getError = require('../../helpers/getError');

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

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    result: {
      email: newUser.email,
    },
  });
});

module.exports = register;
