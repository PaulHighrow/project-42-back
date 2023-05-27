const cloudinary = require('cloudinary').v2;

const deleteImage = async imgId => {
  const result = await cloudinary.uploader.destroy(imgId);
  return result;
};

module.exports = { deleteImage };
