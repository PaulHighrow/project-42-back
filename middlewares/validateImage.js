const formidable = require('formidable');
const httpError = require('../helpers/httpError');

const validateImage = (req, res, next) => {
  const form = formidable({ multiples: true });
  form.parse(req, (__, field, file) => {
    console.log(file.image.mimetype);
    const type = [
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/bmp',
      'image/gif',
      'image/tif',
      'image/tiff',
    ];

    if (!type.includes(file.image.mimetype)) {
      return next(
        httpError(
          400,
          `It's not format images! Please upload the file in the following format ('.jpg','.jpeg','.png','.bmp','.gif','.tif','.tiff')`
        )
      );
    }

    if (file.image.size > 5000000) {
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
