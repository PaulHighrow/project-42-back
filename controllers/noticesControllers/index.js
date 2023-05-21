const getAllNotices = require('./getAllNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const deleteNotice = require('./deleteNotice');
const updateNotice = require('./updateNotice');
const updateFavotiteNotice = require('./updateFavotiteNotice');

module.exports = {
  getAllNotices,
  addNotice,
  getNoticeById,
  deleteNotice,
  updateNotice,
  updateFavotiteNotice,
};
