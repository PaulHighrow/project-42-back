const getAllNotices = require('./getAllNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const deleteNotice = require('./deleteNotice');
const updateNotice = require('./updateNotice');
const updateFavoriteNotice = require('./updateFavoriteNotice');
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
  updateFavoriteNotice,
};
