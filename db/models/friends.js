const { model, Schema } = require('mongoose');

const friendsSchema = new Schema({
  title: String,
  url: {
    type: String,
    default: null,
  },
  addressUrl: {
    type: String,
    default: null,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  workDays: [
    {
      isOpen: Boolean,
      from: String,
      to: String,
    },
  ],
});

const Friends = model('friends', friendsSchema);

module.exports = Friends;
