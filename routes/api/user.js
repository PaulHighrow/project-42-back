const express = require('express');

const authenticate = require('../../middlewares/auth');

const asyncWrapper = require('../../helpers/asyncWrapper');

const ctrl = require('../../controllers/user');
const uploadCloud = require('../../middlewares/upload');

const router = express.Router();

// current відповідає за оновлення сторінки користувача
router.get('/current', authenticate, asyncWrapper(ctrl.current));
// update оновлює поля з інформацією юзера та АВАТАР
router.patch('/update', authenticate, uploadCloud.single('avatarURL'), ctrl.update);
// avatar відповідає за видалення аватара користувача
router.patch('/avatars', authenticate, ctrl.avatar);

module.exports = router;
