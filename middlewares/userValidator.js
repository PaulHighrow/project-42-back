const Joi = require('joi');
const httpError = require('../helpers/httpError');

const validateUserData = (req, __, next) => {
  const { error } = userValidate(req.body);
  if (error) {
    const fieldWithError = error.details[0].path[0];
    const errorType = error.details[0].type;

    switch (errorType) {
      case 'string.min':
        next(httpError(400, `${fieldWithError} must be at least 6 characters`));
        break;
      case 'any.required':
        next(httpError(400, `missing required ${fieldWithError} field`));
        break;
      case 'string.pattern.base':
        if (fieldWithError === 'password') {
          next(
            httpError(
              400,
              `Password must include at least one capital letter and one digit`
            )
          );
          break;
        }
        next(httpError(400, `please enter a valid ${fieldWithError}`));
        break;
      case 'object.unknown':
        next(httpError(400, `property ${fieldWithError} is not allowed`));
        break;
      case 'string.base':
        next(httpError(400, `property ${fieldWithError} must be a string`));
        break;
      default:
        break;
    }
    return;
  }
  next();
};

const userValidate = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .required(),
    password: Joi.string()
      .min(6)
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)
      .required(),
  });

  return schema.validate(data);
};

module.exports = validateUserData;
