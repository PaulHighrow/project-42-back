const Notice = require('../../db/models/noticesModel');

const getUserNotices = async (req, res) => {
  const { page = 1, limit = 20, title, categories } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;

  const queryBody = {};

  if (title) {
    queryBody.titleArray = title.toLowerCase().split(' ');

    if (queryBody.titleArray.length === 1) {
      queryBody.titleArray = title.toLowerCase();
    }
  }

  if (categories) {
    queryBody.categories = categories.toLowerCase();
  }

  const notices = await Notice.find(queryBody, '', {
    skip,
    limit,
  });

  const filterKeysNotices = notices.map(notice => {
    notice.favoriteNotice = notice.favorite.includes(owner);
    return {
      id: notice._id,
      categories: notice.categories,
      title: notice.title,
      name: notice.name,
      birthday: notice.birthday,
      place: notice.place,
      sex: notice.sex,
      imageURL: notice.imageURL,
      favorite: notice.favoriteNotice,
    };
  });

  res.json({
    status: 'success',
    code: 200,
    data: { notices: filterKeysNotices },
  });
};

module.exports = getUserNotices;
