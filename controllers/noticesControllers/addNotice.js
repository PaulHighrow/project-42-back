const Notice = require('../../db/models/noticesModel');
const fs = require('fs/promises');
const path = require('path');

const configCloudinary = require('./configCloudinary');

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const titleArray = req.body.title.toLowerCase().split(' ');
  const fileName = `${owner}_${originalname}`;
  const tmpDir = path.dirname(tmpUpload);
  const resultUpload = path.join(tmpDir, fileName);

  await fs.rename(tmpUpload, resultUpload);
  const result = await configCloudinary(fileName, resultUpload);
  await fs.rm(tmpDir, { recursive: true });

  const notice = await Notice.create({
    ...req.body,
    imageURL: result.url,
    titleArray,
    owner,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      notice: {
        categories: notice.categories,
        title: notice.title,
        name: notice.name,
        birthday: notice.birthday,
        breed: notice.birthday,
        place: notice.place,
        sex: notice.sex,
        imageURL: notice.imageURL,
        comments: notice.comments,
        price: notice.price,
      },
    },
  });
};

module.exports = addNotice;
