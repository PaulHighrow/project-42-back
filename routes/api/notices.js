const express = require('express');
const router = express.Router();

// const asyncWrapper = require('../../helpers/asyncWrapper');

router.get('/');

router.get('/:noticeId');

router.post('/');

router.put('/:noticeId');

router.patch('/:noticeId/favorite');

router.delete('/:noticeId');

module.exports = router;
