const express = require("express");
const router = express.Router();



//GET - /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

//ROUTER: /api/users
router.use('/users', require('./users'));


//ROUTER: /api/messages
router.use('/messages', require('./messages'));

//ROUTER: /api/swipes
router.use('/swipes', require('./swipes'))

module.exports = router;

