const Notice = require('../../db/models/noticesModel');

const getUserNotices = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    title,
    categories,
    minPrice,
    maxPrice,
    sex,
    minMonths,
    maxMonths,
  } = req.query;
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

  const notices = await Notice.find(queryBody, '', {
    skip,
    limit,
  });

  const filterKeysNotices = notices.filter(notice => notice.owner === owner);

  if (!filterKeysNotices.length) {
    return res.json({
      status: 'success, no data found',
      code: 200,
    });
  }
  res.json({
    status: 'success',
    code: 200,
    data: { notices: filterKeysNotices },
  });
};

module.exports = getUserNotices;
