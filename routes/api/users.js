const express = require('express');

const authenticate = require('../../middlewares/authenticate');

const asyncWrapper = require('../../helpers/asyncWrapper');

const getCurrentUser = require('../../controllers/userControllers/getCurrentUser');

const router = express.Router();

router.get('/current', authenticate, asyncWrapper(getCurrentUser));

module.exports = router;
