const Notice = require('../../db/models/noticesModel');

const httpError = require('../../helpers/httpError');

const deleteNotice = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const { _id: owner } = req.user;
  const notice = await Notice.findByIdAndRemove({ owner, _id });

  if (!notice) {
    return next(httpError(404, `Notice with id=${_id} is not found`));
  }

  res.json({
    status: 'success',
    code: 200,
    message: `Notice with id=${_id} was deleted`,
    data: {
      notice: {
        id: _id,
        categories: notice.categories,
        title: notice.title,
        name: notice.name,
      },
    },
  });
};

module.exports = deleteNotice;
