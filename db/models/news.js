const { Schema, model } = require('mongoose');

const news = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title'],
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const News = model('news', news);

module.exports = News;
