const { Pet } = require("../db/models/petsModel");


const findUserPets = async _id => {
  const pets = await Pet.find({ owner: _id }).sort({ createdAt: -1 });

  return pets;
};

module.exports = {
  findUserPets,
};