const Notice = require('../../db/models/noticesModel');

const httpError = require('../../helpers/httpError');

const deleteNotice = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const { _id: owner } = req.user;
  const notice = await Notice.findByIdAndRemove({ owner, _id });

  if (notice.length === 0) {
    return next(httpError(404, `Notice width id=${_id} is not found`));
  }

  res.json({
    status: 'success',
    code: 200,
    message: `Contact width id=${_id} was deleted`,
    data: notice,
  });
};

module.exports = deleteNotice;
