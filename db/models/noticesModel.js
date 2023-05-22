const { Schema, model } = require('mongoose');

const mongooseError = require('../../middlewares/mongooseError');

const { emailPattern } = require('../../schemas/patterns');
const { phonePattern } = require('../../schemas/patterns');

const noticesSchema = new Schema(
  {
    categories: {
      type: String,
      enum: ['sell', 'lost/found', 'in good hands', 'favorite ads', 'my ads'],
      required: true,
    },
    title: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      // required: true,
    },
    place: {
      type: String,
      // required: true,
    },
    sex: {
      type: String,
      enum: ['female', 'male'],
      required: true,
    },
    email: {
      type: String,
      match: emailPattern,
      required: true,
    },
    phone: {
      type: String,
      match: phonePattern,
      required: true,
    },
    comments: {
      type: String,
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
