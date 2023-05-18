const Jimp = require("jimp");

const imgResizer = async (path) => {
  try {
    const img = await Jimp.read(path);
    img.resize(250, 250);
    img.write(path);
  } catch (err) {
    console.log(err);
  }
};

module.exports = imgResizer;
