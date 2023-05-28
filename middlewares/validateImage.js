const formidable = require('formidable');
const fs = require('fs/promises');
const path = require('path');

const httpError = require('../helpers/httpError');
const tmpDir = require('../path');

const validateImage = (req, res, next) => {
  const form = formidable();
  form.parse(req, (__, field, file) => {
    const type = [
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/bmp',
      'image/gif',
      'image/tif',
      'image/tiff',
    ];
    const resultUpload = path.join(tmpDir, file.imageURL.originalFilename);

    if (!type.includes(file.imageURL.mimetype)) {
      fs.unlink(resultUpload);
      return next(
        httpError(
          400,
          `Incorrect image format! Please upload the file in the following format ('.jpg','.jpeg','.png','.bmp','.gif','.tif','.tiff')`
        )
      );
    }

    if (file.imageURL.size > 5000000) {
      fs.unlink(resultUpload);
      return next(
        httpError(
          400,
          `Image size too large! Image size must be less than 5MB.')`
        )
      );
    }
  });
  next();
};

module.exports = validateImage;
