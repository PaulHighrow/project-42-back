// email!123@mail.com
const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[^_.-]\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// min 7 max 32 "1Qw!_578"
const passwordPattern = /(?!\s)^[^ ]{7,32}$/;
// +380991234567
const phonePattern = /^\+380\d{9}$/;

module.exports = {
  emailPattern,
  passwordPattern,
  phonePattern,
};
