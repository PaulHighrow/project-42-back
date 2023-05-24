const jwt = require('jsonwebtoken');
const path = require('path');

const configPath = path.join(__dirname, '..', '.env');
require('dotenv').config({
  path: configPath,
});

const generateToken = async _id => {
  const payload = { id: _id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '23h' });
  return { token };
};

module.exports = { generateToken };
