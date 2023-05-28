const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
const uploadNotice = require('../../middlewares/uploadNotice');
const validation = require('../../middlewares/validation');
const validatorNotice = require('../../middlewares/validatorNotice');
const authenticate = require('../../middlewares/auth');
const validateImage = require('../../middlewares/validateImage');
const ctrNotices = require('../../controllers/noticesControllers');
const schema = require('../../schemas/noticeSchema');

router.get('/', asyncWrapper(ctrNotices.getAllNotices));

router.get('/user', authenticate, asyncWrapper(ctrNotices.getUserNotices));

router.get(
  '/user/favorite',
  authenticate,
  asyncWrapper(ctrNotices.getFavoriteNotices)
);

router.get('/:noticeId', asyncWrapper(ctrNotices.getNoticeById));

router.post(
  '/user',
  authenticate,
  validateImage,
  uploadNotice.single('imageURL'),
  validatorNotice(),
  asyncWrapper(ctrNotices.addNotice)
);

router.put(
  '/user/:noticeId',
  authenticate,
  validateImage,
  uploadNotice.single('imageURL'),
  validation(schema.putSchema),
  asyncWrapper(ctrNotices.updateNotice)
);

router.patch(
  '/user/favorite/:noticeId',
  authenticate,
  asyncWrapper(ctrNotices.updateFavotiteNotice)
);

router.delete(
  '/user/:noticeId',
  authenticate,
  asyncWrapper(ctrNotices.deleteNotice)
);

module.exports = router;
