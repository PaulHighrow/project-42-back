const { Schema, model } = require('mongoose');

const mongooseError = require('../../middlewares/mongooseError');

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
      minlength: 2,
      maxlength: 16,
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
    comments: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
    },
    imageURL: {
      type: String,
      default: '',
    },
    favorite: {
      type: [String],
      default: [],
    },
    favoriteNotice: {
      type: Boolean,
    },
    titleArray: {
      type: [String],
      default: [],
    },
    birthDate: {
      type: Number,
      default: 0,
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
