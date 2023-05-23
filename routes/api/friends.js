const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/friends');

router.get('/', ctrl.getFriends);

module.exports = router;
