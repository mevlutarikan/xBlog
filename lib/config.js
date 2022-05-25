const { join } = require('path');
const fs = require('fs');

const config = {};

// assign project root directory path to global __root Dir variable
global.__rootDir = join(__dirname, '..');

try {
  require('dotenv').config();
  config.NODE_ENV = process.env.NODE_ENV || 'development';
} catch (err) {
  console.log('!!Production Enviroment!!');
  config.NODE_ENV = 'production';
}

// server port
config.port = process.env.PORT || 3000;

// DB connection URL
config.DB_URL = process.env.DB_URL || 'mongodb://localhost/xBlog';

// uploaded image file directory
const uploadDir = join(__rootDir, '/public/uploads');
// create uploaded file directory if it is not exist
if (!fs.existsSync(uploadDir)) {
  try {
    fs.mkdirSync(uploadDir);
  } catch (err) {
    console.log(`Can not create ${uploadDir} directory for uploaded files!`);
    process.exit(1);
  }
}
config.uploadDir = uploadDir;

module.exports = config;
