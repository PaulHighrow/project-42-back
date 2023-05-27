const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const authenticate = require('../../middlewares/auth');

// register відповідає за реєстрацію користувача
router.post('/register', ctrl.register);

// login відповідає за логінізацію користувача
router.post('/login', ctrl.login);

// logout відповідає за вихід користувача зі свого профілю
router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
