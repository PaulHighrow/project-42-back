const asyncWrapper = ctrl => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      console.log(error);
      error.status = 500;
      next();
    }
  };
};

module.exports = asyncWrapper;
