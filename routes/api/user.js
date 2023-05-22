const express = require('express');

const authenticate = require('../../middlewares/auth');

const asyncWrapper = require('../../helpers/asyncWrapper');

const ctrl = require('../../controllers/user');
const uploadCloud = require('../../middlewares/upload');
const { updateValidation } = require('../../schemas/validationUser');
const { avatar } = require('../../controllers/user/avatar');

const router = express.Router();

router.get('/current', authenticate, asyncWrapper(ctrl.current));
router.patch(
  '/update',
  authenticate,
  updateValidation,
  asyncWrapper(ctrl.update)
);
router.patch(
  '/avatars',
  authenticate,
  uploadCloud.single('avatarURL'),
  asyncWrapper(avatar)
);

module.exports = router;
