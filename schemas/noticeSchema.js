const Joi = require('joi');

const { emailPattern } = require('./patterns');
const { phonePattern } = require('./patterns');

const postSchema = Joi.object({
  categories: Joi.string()
    .valid('sell', 'lost/found', 'in good hands', 'favorite ads', 'my ads')
    .required(),
  title: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(15).required(),
  birthday: Joi.date().less('now').required(),
  breed: Joi.string(),
  place: Joi.string().required(),
  sex: Joi.string().valid('female', 'male').required(),
  email: Joi.string().pattern(emailPattern).required(),
  phone: Joi.string().pattern(phonePattern).required(),
  comments: Joi.string(),
});

const putSchema = Joi.object({
  categories: Joi.string().valid(
    'sell',
    'lost/found',
    'in good hands',
    'favorite ads',
    'my ads'
  ),
  title: Joi.string().min(3).max(30),
  name: Joi.string().required().min(3).max(15),
  birthday: Joi.date().less('now'),
  breed: Joi.string(),
  place: Joi.string(),
  sex: Joi.string().valid('female', 'male'),
  email: Joi.string().pattern(emailPattern),
  phone: Joi.string().pattern(phonePattern),
  comments: Joi.string(),
});

const patchFavoriteSchema = Joi.object({
  favorite: Joi.array().items(Joi.string()),
});

const schema = { postSchema, putSchema, patchFavoriteSchema };

module.exports = schema;
