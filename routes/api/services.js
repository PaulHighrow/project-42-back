const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/services');

router.get('/', ctrl.getServices);

module.exports = router;
