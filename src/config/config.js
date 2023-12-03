// src/config/config.js

const config = {
  username: "root", // process.env.MYSQL_USER,
  password: "root",//process.env.MYSQL_PASSWORD,
  database: "loja",//process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};