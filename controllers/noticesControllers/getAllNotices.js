const Notice = require('../../db/models/noticesModel');

const getAllNotices = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    title,
    categories,
    minPrice,
    maxPrice,
    sex,
  } = req.query;
  const skip = (page - 1) * limit;
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

  if (sex) {
    queryBody.sex = sex.toLowerCase();
  }

  if (minPrice) {
    queryBody.price = { $gte: minPrice };
  }

  if (maxPrice) {
    queryBody.price = { ...queryBody.price, $lte: maxPrice };
  }

  const notices = await Notice.find(queryBody, '', {
    skip,
    limit,
  });

  const filterKeysNotices = notices.map(notice => {
    return {
      id: notice._id,
      categories: notice.categories,
      title: notice.title,
      name: notice.name,
      birthday: notice.birthday,
      place: notice.place,
      sex: notice.sex,
      imageURL: notice.imageURL,
      price: notice.price,
    };
  });

  res.json({
    status: 'success',
    code: 200,
    data: { notices: filterKeysNotices },
  });
};

module.exports = getAllNotices;
