require('dotenv').config();
module.exports = {
    development: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.DATABASE_DEVELOPMENT,
        host: '127.0.0.1',
        dialect: 'postgres',
        logging: true,
    },
    test: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.DATABASE_PRODUCTION,
        host: '127.0.0.1',
        dialect: 'postgres',
        host: '127.0.0.1',
        dialect: 'postgres',
        logging: false,
    },
    production: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.DATABASE_PRODUCTION,
        host: '127.0.0.1',
        dialect: 'postgres',
        host: '127.0.0.1',
        dialect: 'postgres',
        logging: false,
    },
};
