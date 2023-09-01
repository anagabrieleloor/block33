const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getUserById } = require('../db/helpers/users');


//GET - /api/users - get all users
router.get('/', async (req, res, next) => {
    try {
        
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// GET - /api/users/:user_id - get user by id
router.get('/:user_id', async (req, res, next) => {
    try {
        
        const user = await getUserById(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});



module.exports = router;