//require Client from pg
const { Client } = require('pg')

//establish connection to database
const carino = 'carino'
// const client = new Client(`postgres://localhost:5432/${carino}`)

const client = new Client((`postgres://carino_bj0u_user:RC87rlGL8UcNKPfmK7mcskjz7Lz1NphR@dpg-cltgh5q1hbls73eeop0g-a/carino_bj0u`));


//esport for use in other files
module.exports = client

