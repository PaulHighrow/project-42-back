const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const httpError = require("../../helpers/httpError");
const { loginUser, findUser } = require("../../services/usersServices");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = await findUser(email);
  if (!existingUser) {
    return next(httpError(401, "Email or password is wrong"));
  }

  const validatedPassword = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!validatedPassword) {
    return next(httpError(401, "Email or password is wrong"));
  }

  const payload = { id: existingUser._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
  await loginUser(existingUser._id, { token });

  res
    .status(200)
    .json({ token, user: { email, subscription: existingUser.subscription } });
};

module.exports = login;
