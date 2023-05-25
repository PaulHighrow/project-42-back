const Services = require("../db/models/services");

const getAllServices = async () => {
    const friends = await Services.find({});
    return friends;
};

module.exports = getAllServices;