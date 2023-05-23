const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
const upload = require('../../middlewares/uploadNotice');
const validation = require('../../middlewares/validation');
const authenticate = require('../../middlewares/auth');
const ctrNotices = require('../../controllers/noticesControllers');
const schema = require('../../schemas/noticeSchema');

router.get('/', asyncWrapper(ctrNotices.getAllNotices));

router.get('/user', authenticate, asyncWrapper(ctrNotices.getUserNotices));

router.get(
  '/favorite',
  authenticate,
  asyncWrapper(ctrNotices.getFavoriteNotices)
);

router.get('/:noticeId', authenticate, asyncWrapper(ctrNotices.getNoticeById));

router.post(
  '/',
  authenticate,
  upload.single('image'),
  validation(schema.postSchema),
  asyncWrapper(ctrNotices.addNotice)
);

router.put(
  '/:noticeId',
  authenticate,
  upload.single('image'),
  validation(schema.putSchema),
  asyncWrapper(ctrNotices.updateNotice)
);

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

module.exports = router;
