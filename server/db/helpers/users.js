const client = require('../client')

const createUser = async ({ username, password, firstName, lastName, gender, location, education, work, photos, aboutMe, song }) => {
    try {
        const {
            rows: [user],
            //INSER SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, etc)
            //VALUES (var1, etc)
            //RETURNING everything
            `
                INSERT INTO users(username, password, firstName, lastName, gender, location, education, work, photos, aboutMe, song)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                RETURNING *;
            `,
            //hook parameteres to variables
            [username, password, firstName, lastName, gender, location, education, work, photos, aboutMe, song]
        )
        return user
    } catch (error) {
        throw error
    }
}

const getAllUsers = async () => {
    try {
        const { row }
        = await client.query(`
            SELECT *
            FROM users;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { createUser, getAllUsers }