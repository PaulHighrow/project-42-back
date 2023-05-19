const express = require('express');
const router = express.Router();

const { authenticate } = require('../../middlewares/authenticate');
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { pets: ctrl } = require('../../controllers');

router.get('/');

router.post(
    '/addpet',
    authenticate,
    // // upload.single('photo'),
    // // Joi validation?
    asyncWrapper(ctrl.addPet)
    );

router.put('/:petId');

router.patch('/:petId');

router.delete('/:petId');

module.exports = router;
