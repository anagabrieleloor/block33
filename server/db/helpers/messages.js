const client = require('../client')

const createMessage = async ({ sender_id, receiver_id, message_content, thread_id }) => {
    try {
      if (!thread_id) {
        // Checks if a thread already exists between sender and receiver
        const {
          rows: [existingThread],
        } = await client.query(
          `
          SELECT thread_id
          FROM messages
          WHERE (sender_id = $1 AND receiver_id = $2) 
          OR (sender_id = $2 AND receiver_id = $1)
          `,
          [sender_id, receiver_id]
        );
  
        if (existingThread) {
          thread_id = existingThread.thread_id;
        } else {
          // If no existing thread, creates new thread_id
          const {
            rows: [message],
          } = await client.query('INSERT INTO messages DEFAULT VALUES RETURNING thread_id;');
          thread_id = message.thread_id;
        }
      }
  
      // Photo autopopulate with new message
      const {
        rows: [messageWithPhoto],
      } = await client.query(
        `
        INSERT INTO messages(sender_id, receiver_id, message_content, thread_id)
        VALUES($1, $2, $3, $4)
        RETURNING *, (SELECT photos FROM users WHERE user_id = $1) AS sender_photo;
        `,
        [sender_id, receiver_id, message_content, thread_id]
      );
  
      return messageWithPhoto;
    } catch (error) {
      throw error;
    }
  };




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
        m.thread_id
        FROM
        messages m
        INNER JOIN
        users s ON m.sender_id = s.user_id
        INNER JOIN
        users r ON m.receiver_id = r.user_id
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
            m.thread_id
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
            thread_id = $4
            WHERE message_id = $5
            RETURNING *;
        `, [
            updatedMessage.sender_id,
            updatedMessage.receiver_id,
            updatedMessage.message_content,
            updatedMessage.thread_id,
            message_id
        ]);

        return message;
    } catch (error) {
        throw error;
    }
}


module.exports = { createMessage, getAllMessages, getMessageById, deleteMessage, editMessage, getMessagesByThread }