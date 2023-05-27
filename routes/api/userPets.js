const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/userPetsControllers');
const authenticate = require('../../middlewares/auth');


router.get('/', authenticate, ctrl.getUserPets);

module.exports = router;
