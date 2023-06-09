const express = require('express');
const router = express.Router();

const authenticate = require('../../middlewares/auth');
const asyncWrapper = require('../../helpers/asyncWrapper');
const uploadCloud = require('../../middlewares/uploadPet');
const validation = require('../../middlewares/validation');
const { joiSchema } = require('../../db/models/petsModel');
const ctrl = require('../../controllers/petsControllers');

router.post(
  '/addpet',
  authenticate,
  uploadCloud.single('imageURL'),
  validation(joiSchema),
  asyncWrapper(ctrl.addPet)
);

router.delete('/:petId', authenticate, asyncWrapper(ctrl.removePet));

module.exports = router;
