const errorMessages = {
  400: "Bad request",
  401: "Unathorized",
  404: "Not found",
  409: "Conflict",
  500: "Server error",
};

const httpError = (status, message = errorMessages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = httpError;
