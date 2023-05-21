const Notice = require('../../db/models/noticesModel');

const httpError = require('../../helpers/httpError');

const updateNotice = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const { _id: owner } = req.user;
  const notice = await Notice.findByIdAndUpdate({ owner, _id }, req.body, {
    new: true,
  });

  if (notice.length === 0) {
    return next(httpError(404, `Notice width id=${_id} is not found`));
  }

  res.json({
    status: 'success',
    code: 200,
    // data: notice,
  });
};

module.exports = updateNotice;
