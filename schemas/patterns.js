// email!123@mail.com
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[^_.-]\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// min 7 max 32 "1Qw!_578"
const passwordPattern = /(?!\s)^[^ ]{7,32}$/;
// любе ім'я тільки українською або англійською (російські букви, яких немає у нас не підтримуються)
const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\_]+$/;
// +380991234567
const phonePattern = /^\+380\d{9}$/;
// люба назва українською або англійською (російські букви, яких немає у нас не підтримуються)
const locationPattern = /^[a-zA-Zа-яіїєА-ЯІЇЄ ,.'-]+$/;

module.exports = {
  emailPattern,
  passwordPattern,
  namePattern,
  phonePattern,
  locationPattern,
};
