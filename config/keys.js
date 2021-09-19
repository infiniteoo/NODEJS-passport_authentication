// require dotenv
require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_CONNECT_STRING,
};
