const express = require('express');
const router = express.Router();

// const asyncWrapper = require('../../helpers/asyncWrapper');

router.get('/');

router.post('/');

router.put('/:petId');

router.patch('/:petId');

router.delete('/:petId');

module.exports = router;
