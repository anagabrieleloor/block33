const express = require('express');
const router = express.Router();

const { createMessage, getAllMessages, getMessageById } = require('../db/helpers/messages');


//GET - api/messages - get all messages
router.get('/', async (req, res, next) => {
    try {
        
        const messages = await getAllMessages();
        res.send(messages);
    } catch (error) {
        next(error);
    }
});

// GET - /api/messages/:message_id - get message by id
router.get('/:message_id', async (req, res, next) => {
    try {
        
        const message = await getMessageById(req.params.message_id);
        res.send(message);
    } catch (error) {
        next(error);
    }
});

//POST - /api/messages - create new message
router.post('/', async (req, res, next) => {
    try{
        const message = await createMessage(req.body);
        res.send(message);
    } catch (error) {
        next(error);
    }
});

module.exports = router;