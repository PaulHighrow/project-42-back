const multer = require('multer');
const path = require('path');
require('dotenv').config();

const tempDir = path.join(__dirname, '../', 'tmp');

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format. File should have png, jpeg, or jpg formats'), false);
  }
};

const uploadPet = multer({
  storage: multerConfig,
  limits: { fileSize: 5242880 },
  fileFilter,
});

module.exports = uploadPet;
