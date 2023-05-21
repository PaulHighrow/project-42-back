const { Schema, model } = require('mongoose');

const mongooseError = require('../../middlewares/mongooseError');

// const validateNumber = /\(\d{3}\) \d{3}-\d{4}$/;
const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ['female', 'male'],
      required: true,
    },
    email: {
      type: String,
      match: validateEmail,
      required: true,
    },
    phone: {
      type: String,
      // match: validateNumber,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      default: '',
    },
    favorite: {
      type: [String],
      default: [],
    },
    titleArray: {
      type: [String],
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

noticesSchema.post('save', mongooseError);

const Notice = model('notice', noticesSchema);

module.exports = Notice;
