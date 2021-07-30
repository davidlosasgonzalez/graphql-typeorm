require('dotenv').config();

const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } =
    process.env;

module.exports = {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
};
