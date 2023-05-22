const Notice = require('../../db/models/noticesModel');
const fs = require('fs/promises');
const path = require('path');

const configCloudinary = require('./configCloudinary');

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const titleArray = req.body.title.split(' ');
  const fileName = `${owner}_${originalname}`;
  const tmpDir = path.dirname(tmpUpload);
  const resultUpload = path.join(tmpDir, fileName);

  await fs.rename(tmpUpload, resultUpload);
  const result = await configCloudinary(fileName, resultUpload);
  await fs.unlink(resultUpload);

  const notice = await Notice.create({
    ...req.body,
    imageURL: result.url,
    titleArray,
    owner,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: notice,
  });
};

module.exports = addNotice;
