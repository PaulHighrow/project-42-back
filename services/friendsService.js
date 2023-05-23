const { Friends } = require("../db/models")

const getAllFriends = async () => {
    const friends = await Friends.find({});
    return friends;
};

module.exports = getAllFriends;