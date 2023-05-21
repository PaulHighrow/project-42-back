const mongooseError = (error, __, next) => {
  error.status = 400;
  next();
};

module.exports = mongooseError;
