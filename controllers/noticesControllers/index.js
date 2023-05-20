const getAllNotices = require('./getAllNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const deleteNotice = require('./deleteNotice');
const updateNotice = require('./updateNotice');
const updateStatusNotice = require('./updateNotice');

module.exports = {
  getAllNotices,
  addNotice,
  getNoticeById,
  deleteNotice,
  updateNotice,
  updateStatusNotice,
};
