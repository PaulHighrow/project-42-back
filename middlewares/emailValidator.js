const Joi = require("joi");
const httpError = require("../helpers/httpError");

const validateEmail = (req, __, next) => {
  const { error } = emailValidate(req.body);
  if (error) {
    const fieldWithError = error.details[0].path[0];
    const errorType = error.details[0].type;

    switch (errorType) {
      case "any.required":
        next(httpError(400, `missing required ${fieldWithError} field`));
        break;
      case "string.min":
        next(httpError(400, `${fieldWithError} must be at least 3 characters`));
        break;
      case "string.pattern.base":
        next(httpError(400, `please enter a valid ${fieldWithError}`));
        break;
      case "object.unknown":
        next(httpError(400, `property ${fieldWithError} is not allowed`));
        break;
      case "string.base":
        next(httpError(400, `property ${fieldWithError} must be a string`));
        break;
      default:
        break;
    }
    return;
  }
  next();
};

const emailValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(3)
      .pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .required(),
  });

  return schema.validate(data);
};

module.exports = validateEmail;
