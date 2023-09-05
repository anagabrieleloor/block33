const client = require('../client')

const createMessage = async ({ sender_id, receiver_id, message_content }) => {
    try {
        const {
            rows: [message],
            //INSER SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, etc)
            //VALUES (var1, etc)
            //RETURNING everything
            `
                INSERT INTO messages(sender_id, receiver_id, message_content)
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            //hook parameteres to variables
            [sender_id, receiver_id, message_content]
        )
        return message
    } catch (error) {
        throw error
    }
}

//GET - /api/messages - get all messages
const getAllMessages = async () => {
    try {
        const { rows }
        = await client.query(`
            SELECT *
            FROM messages;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

//GET - /api/messages/:message_id - get message by id
const getMessageById = async (message_id) => {
    try {
        const { rows: [message], }
        = await client.query(`
        SELECT * 
        FROM messages
        WHERE message_id = ${message_id};
        `);
         return message;
        } catch (error) {
         throw error;
    }
}

//DELETE - /api/messages/:message_id - delete message
const deleteMessage = async (message_id) => {
    try {
        const { rows: [message], } = await client.query(`
        DELETE 
        FROM messages
        WHERE message_id = ${message_id};
        `);
        return message;
    } catch (error) {
        throw error;
    }
}


module.exports = { createMessage, getAllMessages, getMessageById, deleteMessage }