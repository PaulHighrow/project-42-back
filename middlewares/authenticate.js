const User = require("../db/models/userModel");
const httpError = require("../helpers/httpError");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const authenticate = async (req, __, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(httpError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(httpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(httpError(401, "Not authorized"));
  }
};

module.exports = authenticate;
