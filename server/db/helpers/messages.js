const client = require('../client')

const createMessage = async ({ senderId, receiverId, message_content }) => {
    try {
        const {
            rows: [message],
            //INSER SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, etc)
            //VALUES (var1, etc)
            //RETURNING everything
            `
                INSERT INTO messages("senderId", "receiverId", message_content)
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            //hook parameteres to variables
            [senderId, receiverId, message_content]
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