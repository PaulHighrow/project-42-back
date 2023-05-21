const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
const upload = require('../../middlewares/uploadNotice');
const authenticate = require('../../middlewares/auth');
const ctrNotices = require('../../controllers/noticesControllers');

router.get('/', asyncWrapper(ctrNotices.getAllNotices));

router.get('/user', authenticate, asyncWrapper(ctrNotices.getUserNotices));

router.get('/:noticeId', authenticate, asyncWrapper(ctrNotices.getNoticeById));

router.post('/', authenticate, asyncWrapper(ctrNotices.addNotice));

router.put('/:noticeId', authenticate, asyncWrapper(ctrNotices.updateNotice));

router.patch(
  '/favorite/:noticeId',
  authenticate,
  asyncWrapper(ctrNotices.updateFavotiteNotice)
);

router.delete(
  '/:noticeId',
  authenticate,
  asyncWrapper(ctrNotices.deleteNotice)
);

router.patch(
  '/image',
  authenticate,
  upload.single('image'),
  asyncWrapper(ctrNotices.uploadImage)
);

module.exports = router;
