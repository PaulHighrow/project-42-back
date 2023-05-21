const Notice = require('../../db/models/noticesModel');

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const titleArray = req.body.title.split(' ');

  const notice = await Notice.create({ ...req.body, titleArray, owner });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: notice,
  });
};

module.exports = addNotice;
