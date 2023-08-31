//require Client from pg
const { Client } = require('pg');

//establish connection to database
const carino = 'carino'
const client = new Client(`postgres://localhost:5432/${carino}`)

module.exports = client