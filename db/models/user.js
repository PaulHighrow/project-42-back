const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is required'],
    },
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      default: '',
    },
    birthday: {
      type: String,
      maxlength: 10,
      default: '',
    },
    phone: {
      type: String,
      maxlength: 13,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: false }
);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.post('save', (error, data, next) => {
  const field = Object.keys(error.keyPattern)[0];
  const message = field === 'email' ? 'Email in use' : error.message;
  const responseError = {
    status: 409,
    message: message,
  };
  return next(responseError);
});

const User = model('user', userSchema);

module.exports = User;
