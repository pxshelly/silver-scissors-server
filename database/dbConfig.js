let config = {};
try {
  config = require('../config');
} catch(error) {
  //no config found
}

module.exports = {
  user: process.env.POSTGRES_USER || config.POSTGRES_USER,
  host: process.env.POSTGRES_HOST || config.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD || config.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE || config.POSTGRES_DATABASE,
};