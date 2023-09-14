const express = require('express');
const router = express.Router();

const { createMessage, getAllMessages, getMessageById, deleteMessage, editMessage, getMessagesByThread } = require('../db/helpers/messages');


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

// GET - /api/messages/:message_id - get message by thread
router.get('/thread/:thread_id', async (req, res, next) => {
    try {     
        const message = await getMessagesByThread(req.params.thread_id);
        res.send(message);
    } catch (error) {
        next(error);
    }
});

//POST - /api/messages/new - create new message
router.post('/new', async (req, res, next) => {
    try {
        const message = await createMessage(req.body);
        res.send(message);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/messages/:message_id - delete message
router.delete('/delete/:message_id', async (req, res, next) => {
    try {
        const message = await deleteMessage(req.params.message_id);
        res.send(message);
    } catch (error) {
        next(error);
    }
});

//PUT - api/messages/edit/:message_id - edit message
router.put('/edit/:message_id', async (req, res, next) => {
    try {
        const { sender_id, receiver_id, message_content } = req.body; // Get updated values from the request body
        const updatedMessage = {
            sender_id,
            receiver_id,
            message_content,
            
           
        };

        const message = await editMessage(req.params.message_id, updatedMessage); // Pass updatedMessage as the second argument
        res.send(message);
    } catch (error) {
        next(error);
    }
});

module.exports = router;