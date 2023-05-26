const schema = require('../schemas/noticeSchema');

const validatorNotice = () => {
  return (req, res, next) => {
    if (req.body.categories === 'sell') {
      const { error } = schema.postSchemaSell.validate(req.body);
      if (error) {
        res.status(400).json({ message: `${error}` });
        next(error);
      }
    } else {
      const { error } = schema.postSchema.validate(req.body);
      if (error) {
        res.status(400).json({ message: `${error}` });
        next(error);
      }
    }
    next();
  };
};

module.exports = validatorNotice;
