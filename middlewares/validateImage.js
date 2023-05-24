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
      return next(httpError(400, `Not image!`));
    }
  });
  next();
};

module.exports = validateImage;
