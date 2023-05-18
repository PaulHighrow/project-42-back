// const express = require("express");

// const listContacts = require("../../controllers/contactsControllers/listContacts");
// const getById = require("../../controllers/contactsControllers/getById");
// const addContact = require("../../controllers/contactsControllers/addContact");
// const removeContact = require("../../controllers/contactsControllers/removeContact");
// const updateContact = require("../../controllers/contactsControllers/updateContact");
// const updateStatusContact = require("../../controllers/contactsControllers/updateStatusContact");

// const validateData = require("../../middlewares/addValidator");
// const validateUpdateData = require("../../middlewares/updateValidator");
// const validateStatusData = require("../../middlewares/updateStatusValidator");
// const authenticate = require("../../middlewares/authenticate");

// const asyncWrapper = require("../../helpers/asyncWrapper");

// const router = express.Router();

// router.get("/", authenticate, asyncWrapper(listContacts));

// router.get("/:contactId", authenticate, asyncWrapper(getById));

// router.post("/", authenticate, validateData, asyncWrapper(addContact));

// router.delete("/:contactId", authenticate, asyncWrapper(removeContact));

// router.put(
//   "/:contactId",
//   authenticate,
//   validateUpdateData,
//   asyncWrapper(updateContact)
// );

// router.patch(
//   "/:contactId/favorite",
//   authenticate,
//   validateStatusData,
//   asyncWrapper(updateStatusContact)
// );

// module.exports = router;
