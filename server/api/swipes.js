const express = require('express');
const router = express.Router();

const { createSwipe, getAllSwipes, getSwipeById } = require('../db/helpers/swipes');


//GET - api/swipes - get all swipes
router.get('/', async (req, res, next) => {
    try {
        
        const swipes = await getAllSwipes();
        res.send(swipes);
    } catch (error) {
        next(error);
    }
});

// GET - /api/swipes/:swipe_id - get swipe by id
router.get('/:swipe_id', async (req, res, next) => {
    try {
        
        const swipe = await getSwipeById(req.params.swipe_id);
        res.send(swipe);
    } catch (error) {
        next(error);
    }
});

//POST - /api/swipes - create new swipe
router.post('/', async (req, res, next) => {
    try{
        const swipe = await createSwipe(req.body);
        res.send(swipe);
    } catch (error) {
        next(error);
    }
});

module.exports = router;