const { logoutUser } = require("../../services/usersServices");

const logout = async (req, res, __) => {
  const { id } = req.user;
  await logoutUser(id, { token: null });
  res.status(204).json();
};

module.exports = logout;
