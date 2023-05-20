const Notice = require('../../db/models/noticesModel');

const httpError = require('../../helpers/httpError');

const updateFavotiteNotice = async (req, res, next) => {
  const { noticeId: _id } = req.params;
  const { _id: owner } = req.user;
  const { favorite } = req.query;

  console.log(favorite);

  const noticeId = await Notice.findById(_id);
  let favorites = noticeId.favorite;

  if (
    !favorites.find(favorite => favorite === String(owner)) &&
    favorite === 'true'
  ) {
    favorites.push(String(owner));
  }

  if (
    favorites.find(favorite => favorite === String(owner)) &&
    favorite === 'false'
  ) {
    favorites = favorites.filter(favorite => favorite !== String(owner));
  }

  const notice = await Notice.findByIdAndUpdate(
    _id,
    { favorite: favorites },
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

module.exports = updateFavotiteNotice;
