const getAllNotices = require('./getAllNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const deleteNotice = require('./deleteNotice');
const updateNotice = require('./updateNotice');
const updateFavotiteNotice = require('./updateFavotiteNotice');
const getUserNotices = require('./getUserNotices');
const uploadImage = require('./uploadImage');

module.exports = {
  getAllNotices,
  getUserNotices,
  addNotice,
  getNoticeById,
  deleteNotice,
  updateNotice,
  updateFavotiteNotice,
  uploadImage,
};
