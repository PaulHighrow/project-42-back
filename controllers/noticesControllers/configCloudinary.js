require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const configCloudinary = async (fileName, resultUpload) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.uploader.upload(resultUpload, {
    public_id: fileName,
  });
  return result;
};

module.exports = configCloudinary;
