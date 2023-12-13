const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { COOKIE_SECRET } = require('./secrets');
const { authRequired } = require('./api/utils');
const jwt = require('jsonwebtoken');
const PORT = 8088;

const client =require('./db/client');
//connect to client
client.connect();

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// init cookie-parser
app.use(cookieParser(COOKIE_SECRET));

app.get('/test', authRequired, (req, res, next) => {
    res.send('you are authorized')
});

// init cors
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});