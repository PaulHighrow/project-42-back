// const bcrypt = require("bcrypt");

// const httpError = require("../../helpers/httpError");
// const { createUser, findUser } = require("../../services/usersServices");

// const register = async (req, res, next) => {
//   const existingUser = await findUser(req.body.email);
//   if (existingUser) {
//     next(httpError(409, "Email in use"));
//   }

//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   const newUser = await createUser({ ...req.body, password: hashedPassword });
//   const { email, subscription } = newUser;
//   res.status(201).json({ user: { email, subscription } });
// };

// module.exports = register;
