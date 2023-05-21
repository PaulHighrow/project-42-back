const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
// const uploadCloud = require('../../middlewares/upload');
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

// router.patch(
//   '/image',
//   authenticate,
//   uploadCloud.single('avatar'),
//   asyncWrapper(ctrNotices.uploadImage)
// );

module.exports = router;
