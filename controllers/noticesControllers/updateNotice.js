const Notice = require('../../db/models/noticesModel');
const fs = require('fs/promises');
const path = require('path');

const configCloudinary = require('./configCloudinary');
const httpError = require('../../helpers/httpError');

const updateNotice = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const { _id: owner } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  let { title, titleArray } = req.body;

  if (title) {
    titleArray = title.toLowerCase().split(' ');
  }

  const fileName = `${owner}_${originalname}`;
  const tmpDir = path.dirname(tmpUpload);
  const resultUpload = path.join(tmpDir, fileName);

  await fs.rename(tmpUpload, resultUpload);
  const result = await configCloudinary(fileName, resultUpload, titleArray);
  await fs.unlink(resultUpload);
  const notice = await Notice.findByIdAndUpdate(
    { owner, _id },
    { ...req.body, imageURL: result.url },
    {
      new: true,
    }
  );

  if (notice.length === 0) {
    return next(httpError(404, `Notice width id=${_id} is not found`));
  }

  res.json({
    status: 'success',
    code: 200,
    data: notice,
  });
};

module.exports = updateNotice;
