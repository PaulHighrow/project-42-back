const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
const authenticate = require('../../middlewares/auth');
const ctrNotices = require('../../controllers/noticesControllers');

router.get('/', asyncWrapper(ctrNotices.getAllNotices));

router.get('/:noticeId', authenticate, asyncWrapper(ctrNotices.getNoticeById));

router.post('/', authenticate, asyncWrapper(ctrNotices.addNotice));

router.put('/:noticeId', authenticate, asyncWrapper(ctrNotices.updateNotice));

router.patch(
  '/:noticeId/favorite',
  authenticate,
  asyncWrapper(ctrNotices.updateStatusNotice)
);

router.delete(
  '/:noticeId',
  authenticate,
  asyncWrapper(ctrNotices.deleteNotice)
);

module.exports = router;
