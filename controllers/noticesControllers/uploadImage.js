const fs = require('fs/promises');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const fileName = `${_id}_${originalname}`;

  const tmpDir = path.dirname(tmpUpload);
  const resultUpload = path.join(tmpDir, fileName);

  await fs.rename(tmpUpload, resultUpload);

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.uploader.upload(resultUpload, {
    public_id: fileName,
  });

  await fs.unlink(resultUpload);

  // const result = await Notice.findByIdAndUpdate(
  //   _id,
  //   { result.url },
  //   {
  //     new: true,
  //   }
  // );

  res.json({
    status: 200,
    imageURL: result.url,
  });
};

module.exports = updateAvatar;
