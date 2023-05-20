const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const authenticate = require('../../middlewares/auth');

router.post('/signup', ctrl.signup);

router.post('/login', ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
