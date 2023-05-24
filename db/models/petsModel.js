const { Schema, model } = require('mongoose');
const Joi = require('joi');

const petsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: false,
    },
    comments: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const birthdayRegexp = /^(\d{1,2})\.(\d{1,2})(?:\.(\d{4}))?$/;

const joiSchema = Joi.object({
  name: Joi.string()
    .pattern(nameRegexp, 'Name must contain only letters')
    .min(2)
    .max(16)
    .required('Name is required'),
  birthday: Joi.string()
    .pattern(birthdayRegexp, 'Birthday must be in format 19.12.2020')
    .required('Birthday is required'),
  breed: Joi.string()
    .pattern(nameRegexp, 'Breed must contain only letters')
    .min(3)
    .max(40),
  comments: Joi.string().min(8).max(120).required('Comment is required'),
});

const Pet = model('pet', petsSchema);
module.exports = { Pet, joiSchema };