const express = require('express');
const router = express.Router();

const authenticate = require('../../middlewares/auth');
const asyncWrapper = require('../../helpers/asyncWrapper');
const { addPet } = require('../../controllers/petsControllers/index');

router.get('/');

router.post(
  '/addpet',
  authenticate,
  // // upload.single('photo'),
  // // Joi validation?
  asyncWrapper(addPet)
);

router.put('/:petId');

router.patch('/:petId');

router.delete('/:petId');

module.exports = router;
