const { Schema, model } = require('mongoose');

const petsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthDate: {
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
  },
  { versionKey: false, timestamps: true }
);

const Pet = model('pet', petsSchema);

module.exports = Pet;
