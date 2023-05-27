const jwt = require('jsonwebtoken');

const { User } = require('../db/models');
const HttpError = require('../helpers/httpError');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') next(HttpError(401, 'Not authorized'));
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) next(HttpError(401, 'Not authorized'));
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid signature') {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = authenticate;
