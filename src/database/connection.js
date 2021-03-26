const { Pool } = require('pg');

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'postgres',
    port: 5432,
})

module.exports = connection