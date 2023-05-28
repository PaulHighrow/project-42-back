const Notice = require('../../db/models/noticesModel');

const httpError = require('../../helpers/httpError');

const getNoticeById = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const notice = await Notice.findById(_id);

  if (notice.length === 0) {
    return next(httpError(404, `Notice width id=${_id} is not found`));
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      notice: {
        id: _id,
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
        owner: notice.owner,
      },
    },
  });
};

module.exports = getNoticeById;
