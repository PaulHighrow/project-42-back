const { News } = require("../db/models");

const getAllNews = async (req, res) => {
  try {
    const { page, perpage, search } = req.query;
    const pageNumber = parseInt(page) || 1;
    const limit = parseInt(perpage) || 6;
    const skip = (pageNumber - 1) * limit;

    const query = {
      title: { $regex: new RegExp(search, 'i') },
    };

    const newsQuery = News.find(query)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    const newsCountQuery = News.countDocuments(query);

    const [data, totalNewsCount] = await Promise.all([
      newsQuery,
      newsCountQuery,
    ]);

    res.json({
      status: 'success',
      code: 200,
      page: pageNumber,
      total: totalNewsCount,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllNews,
};
