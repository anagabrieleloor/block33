const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getUserById, updateUser, deleteUser, getUserMatches, loginUser } = require('../db/helpers/users');


//GET - /api/users - get all users
router.get('/', async (req, res, next) => {
    try{     
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// GET - /api/users/:user_id - get user by id
router.get('/:user_id', async (req, res, next) => {
    try{      
        const user = await getUserById(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//POST - /api/users - create new user
router.post('/signup', async (req, res, next) => {
    try{
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/users/:user_id - update user
router.put('/:user_id', async (req, res, next) => {
    try{
        const user = await updateUser(req.params.user_id, req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/users/:user_id - delete user
router.delete('/:user_id', async (req, res, next) => {
    try{
        const user = await deleteUser(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});
//GET - /api/users/:user_id/matches - get all user matches
router.get('/:user_id/matches', async (req, res, next) => {
    try{
        const user = await getUserMatches(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});



// POST - /api/users/login - login
router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body; 
        console.log("this is the body", req);
        const user = await loginUser(username, password);      
        res.json({ message: 'yayyy ur logged in', user });
    } catch (error) {
        next(error); 
    }
});

//GET - api/users/:session_id - current user profile 
router.get('/users/me', async (req, res, next) => {
    try{
        const user = await currentUser(req.params.session_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;