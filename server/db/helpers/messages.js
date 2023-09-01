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

const getAllMessages = async () => {
    try {
        const { row }
        = await client.query(`
            SELECT *
            FROM messages;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { createMessage, getAllMessages }