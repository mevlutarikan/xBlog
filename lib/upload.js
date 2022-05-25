const { uploadDir } = require('../lib/config');
const multer = require('multer');
module.exports = multer({ dest: uploadDir });
