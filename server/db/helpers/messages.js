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
        const { rows } = await client.query(`
            SELECT
                m.message_id,
                m.message_content,
                s.first_name AS sender_first_name,
                s.photos AS sender_photos,
                m.thread_id
            FROM
                messages m
            INNER JOIN
                users s ON m.sender_id = s.user_id
                ORDER BY
                m.thread_id, m.created_at;
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
                s.first_name AS sender_first_name,
                s.photos AS sender_photos,
                m.thread_id
            FROM
                messages m
            INNER JOIN
                users s ON m.sender_id = s.user_id
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
        const { rows: [message], }
        = await client.query(`
        SELECT
        m.message_id,
        m.message_content,
        m.thread_id,
        s.first_name AS sender_first_name,
        m.sender_id as sender_id,
        s.photos AS sender_photos
    FROM
        messages m
    INNER JOIN
        users s ON m.sender_id = s.user_id
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

//PUT - /api/messages/edit/:message_id - edit message
const editMessage = async (message_id, updatedMessage) => {
    try {
        const { rows: [message] } = await client.query(
            `
              UPDATE messages
              SET
              sender_id = $1,
              receiver_id = $2,
              message_content = $3,
              thread_id = $4
              WHERE message_id = ${message_id}
              RETURNING *;
            `,
            [
              updatedMessage.sender_id,
              updatedMessage.receiver_id,
              updatedMessage.message_content,
              updatedMessage.thread_id,
              
            ]
          );
            return message;
    }   catch (error) {
        throw error;
    }
}


module.exports = { createMessage, getAllMessages, getMessageById, deleteMessage, editMessage, getMessagesByThread }