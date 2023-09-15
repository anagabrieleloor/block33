const client = require('../client')

const createMessage = async ({ sender_id, receiver_id, message_content }) => {
    try {
        const {
            rows: [message],
        } = await client.query (
            `
            INSERT INTO messages(sender_id, receiver_id, message_content, sender_username, receiver_username)
            VALUES($1, $2, $3, (SELECT username FROM users WHERE user_id = $1), (SELECT username FROM users WHERE user_id = $2))
            RETURNING *;
            `,
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
        const { rows } = await client.query(`
        SELECT
        m.message_id,
        m.message_content,
        s.user_id AS sender_id,
        s.first_name AS sender_first_name,
        s.photos AS sender_photos,
        r.user_id AS receiver_id,
        r.first_name AS receiver_first_name,
        r.photos AS receiver_photos,
        m.thread_id,
        m.parent_message_id
        FROM
        messages m
        INNER JOIN
        users s ON m.sender_id = s.user_id
        INNER JOIN
        users r ON m.receiver_id = r.user_id
        ORDER BY
        m.thread_id, m.parent_message_id, m.created_at;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}

// Get all messages in a thread by thread_id
const getMessagesByThread = async (thread_id) => {
    try {
        const { rows } = await client.query(`
        SELECT
        m.message_id,
        m.message_content,
        s.user_id AS sender_id,
        s.first_name AS sender_first_name,
        s.photos AS sender_photos,
        r.user_id AS receiver_id,
        r.first_name AS receiver_first_name,
        r.photos AS receiver_photos,
        m.thread_id
      FROM
        messages m
      INNER JOIN
        users s ON m.sender_id = s.user_id
      INNER JOIN
        users r ON m.receiver_id = r.user_id
      WHERE
        m.thread_id = $1
      ORDER BY
        m.created_at;
        `, [thread_id]);

        return rows;
    } catch (error) {
        throw error;
    }
}


//GET - /api/messages/:message_id - get message by id
const getMessageById = async (message_id) => {
    try {
        const { rows: [message] } = await client.query(`
            SELECT
            m.message_id,
            m.message_content,
            s.user_id AS sender_id,
            s.first_name AS sender_first_name,
            s.photos AS sender_photos,
            r.user_id AS receiver_id,
            r.first_name AS receiver_first_name,
            r.photos AS receiver_photos,
            m.thread_id,
            m.parent_message_id
            FROM
            messages m
            INNER JOIN
            users s ON m.sender_id = s.user_id
            INNER JOIN
            users r ON m.receiver_id = r.user_id
            WHERE m.message_id = $1;
        `, [message_id]);

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

//PUT - /api/messages/edit/:message_id - edit message
const editMessage = async (message_id, updatedMessage) => {
    try {
        const { rows: [message] } = await client.query(`
            UPDATE messages
            SET
            sender_id = $1,
            receiver_id = $2,
            message_content = $3,
            thread_id = $4,
            parent_message_id = $5
            WHERE message_id = $6
            RETURNING *;
        `, [
            updatedMessage.sender_id,
            updatedMessage.receiver_id,
            updatedMessage.message_content,
            updatedMessage.thread_id,
            updatedMessage.parent_message_id,
            message_id
        ]);

        return message;
    } catch (error) {
        throw error;
    }
}


module.exports = { createMessage, getAllMessages, getMessageById, deleteMessage, editMessage, getMessagesByThread }