const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res) => {
  console.log(req.file);
  const imgId = req.file ? req.file.filename : req.user.imgId;
  const result = await cloudinary.uploader.upload(imgId, {
    public_id: 'cat',
  });
  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = uploadImage;
