const express = require('express');
const validateUserData = require('../../middlewares/userValidator');
const authenticate = require('../../middlewares/authenticate');

const asyncWrapper = require('../../helpers/asyncWrapper');

const signup = require('../../controllers/userControllers/signup');
const login = require('../../controllers/userControllers/login');
const logout = require('../../controllers/userControllers/logout');

const router = express.Router();

router.post('/signup', validateUserData, asyncWrapper(signup));

router.post('/login', validateUserData, asyncWrapper(login));

router.post('/logout', authenticate, asyncWrapper(logout));


module.exports = router;
