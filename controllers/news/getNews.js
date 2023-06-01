const { getAllNews } = require("../../services/newsService");


const getNews = async (req, res) => await getAllNews(req, res);

module.exports = getNews;
