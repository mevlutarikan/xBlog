const config = {};

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
module.exports = config;
