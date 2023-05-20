const getError = (error, type) => {
  const requiredFields = error.details
    .filter(detail => detail.type === 'any.required')
    .map(detail => detail.context.label);
  const fieldsString = error.details
    .filter(detail => detail.type.startsWith('string.'))
    .map(detail => detail.message);
  const unknownField = error.details
    .filter(detail => detail.type === 'object.unknown')
    .map(detail => detail.message);
  if (unknownField.length > 0)
    return `Field ${unknownField.toString().replaceAll('"', "'")}`;
  if (requiredFields.length > 0) return `Missing field ${requiredFields}`;
  if (fieldsString.length > 0)
    return `Incorrect field values: ${fieldsString
      .toString()
      .replaceAll('"', "'")}`;

  if (type === 'edit') {
    const keys = Object.keys(error.details[0].context.value);
    if (keys.length === 0) return 'At least one field is required';
  }
  if (type === 'register')
    return 'Subscription must be one of: starter, pro, business';
  return error.message;
};

module.exports = getError;
