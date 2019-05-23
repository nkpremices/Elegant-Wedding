const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    development: {
        username: process.env.devUsername,
        password: process.env.devPassword,
        database: process.env.devDatabase,
        host: process.env.devHost,
        dialect: 'postgres',
    },
    test: process.env.development,
    production: process.env.development,

};
