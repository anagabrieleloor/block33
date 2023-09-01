const client = require('../client')

const createSwipe = async ({ user1, user2, is_like, is_pass }) => {
    try {
        const {
            rows: [swipe],
            //INSER SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, etc)
            //VALUES (var1, etc)
            //RETURNING everything
            `
                INSERT INTO swipes(user1, user2, is_like, is_pass)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            //hook parameteres to variables
            [user1, user2, is_like, is_pass]
        )
        return swipe
    } catch (error) {
        throw error
    }
}

const getAllSwipes = async () => {
    try {
        const { row }
        = await client.query(`
            SELECT *
            FROM swipes;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { createSwipe, getAllSwipes }