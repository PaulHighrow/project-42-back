const asyncHandler = require('express-async-handler');
const getAllFriends = require('../../services/friendsService');

const getFriends = asyncHandler(async (req, res) => {
    const friends = await getAllFriends();

    res.json({
        status: 'success',
        code: 200,
        result: [...friends],
    });
});

module.exports = getFriends;