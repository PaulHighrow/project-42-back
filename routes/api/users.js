const express = require('express');
const validateUserData = require('../../middlewares/userValidator');
const authenticate = require('../../middlewares/authenticate');

const asyncWrapper = require('../../helpers/asyncWrapper');

const register = require('../../controllers/userControllers/register');
const login = require('../../controllers/userControllers/login');
const logout = require('../../controllers/userControllers/logout');
const getCurrentUser = require('../../controllers/userControllers/getCurrentUser');

const router = express.Router();

router.post('/register', validateUserData, asyncWrapper(register));

router.post('/login', validateUserData, asyncWrapper(login));

router.post('/logout', authenticate, asyncWrapper(logout));

router.get('/current', authenticate, asyncWrapper(getCurrentUser));

module.exports = router;
