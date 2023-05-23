const getAllNotices = require('./getAllNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const deleteNotice = require('./deleteNotice');
const updateNotice = require('./updateNotice');
const updateFavotiteNotice = require('./updateFavotiteNotice');
const getUserNotices = require('./getUserNotices');
const getFavoriteNotices = require('./getFavoriteNotices');

module.exports = {
  getAllNotices,
  getUserNotices,
  getFavoriteNotices,
  addNotice,
  getNoticeById,
  deleteNotice,
  updateNotice,
  updateFavotiteNotice,
};
