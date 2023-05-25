const Joi = require('joi');
const JoiDate = require('joi').extend(require('@joi/date'));

const postSchema = Joi.object({
  categories: Joi.string()
    .valid('sell', 'lost/found', 'in good hands', 'favorite ads', 'my ads')
    .required(),
  title: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(15).required(),
  birthday: JoiDate.date().format('DD.MM.YYYY').required(),
  breed: Joi.string().required(),
  place: Joi.string().required(),
  sex: Joi.string().valid('female', 'male').required(),
  comments: Joi.string(),
});

const postSchemaSell = Joi.object({
  categories: Joi.string()
    .valid('sell', 'lost/found', 'in good hands', 'favorite ads', 'my ads')
    .required(),
  title: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(15).required(),
  birthday: JoiDate.date().format('DD.MM.YYYY').required(),
  breed: Joi.string().required(),
  place: Joi.string().required(),
  sex: Joi.string().valid('female', 'male').required(),
  comments: Joi.string(),
  price: Joi.number().min(0).required(),
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
  name: Joi.string().min(3).max(15),
  birthday: JoiDate.date().format('DD.MM.YYYY'),
  breed: Joi.string(),
  place: Joi.string(),
  sex: Joi.string().valid('female', 'male'),
  comments: Joi.string(),
});

const schema = { postSchema, postSchemaSell, putSchema };

module.exports = schema;
