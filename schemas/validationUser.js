const Joi = require('joi');
const getError = require('../helpers/getError');
const { emailPattern, passwordPattern } = require('./patterns');

const schema = {
  register: Joi.object({
    name: Joi.string().min(3).max(20),
    email: Joi.string().email().pattern(emailPattern).required(),
    password: Joi.string().pattern(passwordPattern).required(),
  }).unknown(false),
  login: Joi.object({
    email: Joi.string().email().pattern(emailPattern).required(),
    password: Joi.string().pattern(passwordPattern).required(),
  }).unknown(false),
  update: Joi.object({
    name: Joi.string().min(3).max(20),
    email: Joi.string().email().pattern(emailPattern).required(),
    birthday: Joi.string().max(10),
    phone: Joi.string().max(13),
    city: Joi.string(),
  }).unknown(false),
  avatar: Joi.object({
    fieldname: Joi.string().valid('avatar').required(),
    mimetype: Joi.string()
      .valid('image/jpeg', 'image/png', 'image/jpeg', 'image/gif')
      .required()
      .messages({ 'any.only': 'The file format must be jpg or png' }),
    size: Joi.number()
      .max(1 * 1024 * 1024)
      .required()
      .messages({ 'number.max': 'The file size must not exceed 1 MB' }),
  })
    .required()
    .unknown(true),
};

const registerValidation = ({ body }, res, next) => {
  const { error } = schema.register.validate(body);

  if (error)
    return res.status(400).json({ message: getError(error, 'signup') });

  next();
};

const loginValidation = ({ body }, res, next) => {
  const { error } = schema.login.validate(body);

  if (error) return res.status(400).json({ message: getError(error, 'login') });

  next();
};

const updateValidation = ({ body }, res, next) => {
  const { error } = schema.update.validate(body);

  if (error)
    return res.status(400).json({ message: getError(error, 'signup') });

  next();
};

module.exports = {
  registerValidation,
  loginValidation,
  updateValidation,
};
