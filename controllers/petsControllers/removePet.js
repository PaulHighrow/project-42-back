const { Pet } = require('../../db/models/petsModel');

const removePet = async (req, res) => {
  const { petId } = req.params;
  const result = await Pet.findByIdAndRemove(petId);
  if (!result) {
    return res.status(404).json({ message: 'Pet not found' });
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Pet card deleted!',
    data: { result },
  });
};

module.exports = removePet;
