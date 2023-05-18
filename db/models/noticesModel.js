const { Schema, model } = require('mongoose');

const noticesSchema = new Schema(
  {
    categories: {
      type: String,
      enum: ['sell', 'lost/found', 'in good hands', 'favorite ads', 'my ads'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ['female', 'male'],
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model('notice', noticesSchema);

module.exports = Notice;
