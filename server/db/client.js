//require Client from pg
const { Client } = require('pg')

//establish connection to database
const carino = 'carino'
// const client = new Client(`postgres://localhost:5432/${carino}`)

const client = new Client((`postgres://carino_user:NMpH6AwHq0rzkqBiV0zdUcxEQKQo9tiH@dpg-clsuvripmc4c73dtfn5g-a/carino`));


//esport for use in other files
module.exports = client

