const express = require("express");
const router = express.Router();



//GET - /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

//ROUTER: /api/users
router.use('/users', require('./users'));

module.exports = router;

