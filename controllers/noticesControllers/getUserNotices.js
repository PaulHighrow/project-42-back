const Notice = require('../../db/models/noticesModel');

const getUserNotices = async (req, res) => {
  const { page = 1, limit = 20, title, categories } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const queryBody = { owner };

  if (title) {
    queryBody.titleArray = title.toLowerCase().split(' ');

    if (queryBody.titleArray.length === 1) {
      queryBody.titleArray = title.toLowerCase();
    }
  }

  if (categories) {
    queryBody.categories = categories;
  }

  const notices = await Notice.find(queryBody, '', {
    skip,
    limit,
  });

  res.json({
    status: 'success',
    code: 200,
    data: notices,
  });
};

module.exports = getUserNotices;
