/** Database setup for bankly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');


const client = new Client({
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'bankly',
    password: String(process.env.DB_PASSWORD),
    port: 5432
});


client.connect();

module.exports = client;
