const Notice = require('../../db/models/noticesModel');

const getFavoriteNotices = async (req, res) => {
  const {
    page = 1,
    limit = 12,
    title,
    categories,
    minPrice,
    maxPrice,
    sex,
    minMonths,
    maxMonths,
  } = req.query;
  const skip = (page - 1) * limit;
  const favorite = String(req.user._id);
  const queryBody = { favorite };

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

  if (minMonths) {
    const nowDate = new Date().getTime();
    const ageDate = Number(minMonths) * 2630016000;
    const birthDate = nowDate - ageDate;
    queryBody.birthDate = { $lte: birthDate };
  }

  if (maxMonths) {
    const nowDate = new Date().getTime();
    const ageDate = Number(maxMonths) * 2630016000;
    const birthDate = nowDate - ageDate;
    queryBody.birthDate = { ...queryBody.birthDate, $gte: birthDate };
  }

  const numberNotices = await Notice.find(queryBody);

  const notices = await Notice.find(queryBody, '', {
    skip,
    limit,
  }).sort({ createdAt: -1 });

  if (!notices.length) {
    return res.json({
      status: 'success',
      code: 200,
      message: 'No data found',
    });
  }

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
      owner: notice.owner,
      favorite: notice.favorite,
    };
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      notices: filterKeysNotices,
      pagination: {
        numberNotices: numberNotices.length,
        page,
        limit,
      },
    },
  });
};

module.exports = getFavoriteNotices;
