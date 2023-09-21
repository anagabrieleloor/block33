const client = require('../client')


//POST - /api/users
const createUser = async ({ username, password, first_name, last_name, gender, location, education, work, photos, about_me, song }) => {
    try {
        const {
            rows: [user],
            //INSERT SQL query
        } = await client.query(
            `
                INSERT INTO users(username, password, first_name, last_name, gender, location, education, work, photos, about_me, song)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                RETURNING *;
            `,
            //hook parameteres to variables
            [username, password, first_name, last_name, gender, location, education, work, photos, about_me, song]
        )
        return user
    } catch (error) {
        throw error
    }
}

// const createUser = async ({ username, password }) => {
//     try {
//         const {
//             rows: [user],
//             //INSER SQL query
//         } = await client.query(
//             // INSERT INTO table(column1, column2, etc)
//             //VALUES (var1, etc)
//             //RETURNING everything
//             `
//                 INSERT INTO users(username, password)
//                 VALUES($1, $2)
//                 RETURNING *;
//             `,
//             //hook parameteres to variables
//             [username, password]
//         )
//         return user
//     } catch (error) {
//         throw error
//     }
// }

//GET - /api/users - get all users
const getAllUsers = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM users;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

//GET - /api/users/:user_id
const getUserById = async (user_id) => {
    try {
        const { rows: [user], }
            = await client.query(`
        SELECT * 
        FROM users
        WHERE user_id = ${user_id};
        `);
        return user;
    } catch (error) {
        throw error;
    }
}


// PUT - /api/users/:user_id - update a user
const updateUser = async (user_id, updatedUserData) => {
    try {
        const { rows: [user], }
            = await client.query(`
        UPDATE users 
        SET 
        username = $1, 
        password = $2, 
        first_name = $3, 
        last_name = $4, 
        gender = $5, 
        location = $6, 
        education = $7, 
        work = $8, 
        photos = $9, 
        about_me = $10, 
        song = $11
        WHERE user_id = $12
        RETURNING *;
        `,
                [
                    updatedUserData.username,
                    updatedUserData.password,
                    updatedUserData.first_name,
                    updatedUserData.last_name,
                    updatedUserData.gender,
                    updatedUserData.location,
                    updatedUserData.education,
                    updatedUserData.work,
                    updatedUserData.photos,
                    updatedUserData.about_me,
                    updatedUserData.song,
                    user_id
                ]
            );
        return user;
    } catch (error) {
        throw error;
    }
}

//DELETE - /api/users/:user_id - delete user 
const deleteUser = async (user_id) => {
    try {
        const { rows: [user], }
            = await client.query(`
        DELETE 
        FROM users
        WHERE user_id = ${user_id};
        `);
        return user;
    } catch (error) {
        throw error;
    }
}

//GET - /api/users/:user_id/matches - get user matches
const getUserMatches = async (user_id) => {
    try {
        const { rows: matches }
            = await client.query(`
            SELECT
            u1.user_id AS user1_id,
            u1.first_name AS user1_first_name,
            u1.photos AS user1_photos,
            u2.user_id AS user2_id,
            u2.first_name AS user2_first_name,
            u2.photos AS user2_photos
        FROM
            swipes s1
        JOIN
            swipes s2 ON s1.user1 = s2.user2 AND s1.user2 = s2.user1 AND s1.is_like = TRUE AND s2.is_like = TRUE
        JOIN
            users u1 ON s1.user1 = u1.user_id
        JOIN
            users u2 ON s1.user2 = u2.user_id
        WHERE
            s1.user1 = ${user_id};                   
        `);
        return matches;
    } catch (error) {
        throw error;
    }
}

const getUserMessages = async (user_id) => {
    try {
        const result = await client.query(`
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
                s.user_id = $1;
        `, [user_id]);

        const messages = result.rows; 

        return messages;
    } catch (error) {
        throw error;
    }
}


//POST - api/users/login - login 
const loginUser = async (username, password) => {
    try {
        console.log(username, password);
        const {
            rows: [user],
        } = await client.query(
            `
            SELECT * 
            FROM users 
            WHERE username = $1
            AND password = $2;
            `,
            [username, password]
        );
        return user;
    } catch (error) {
        throw error;
    }
};

//post 
const getUserByUsername = async (username) => {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE users.username = $1
      `,
      [username]
    )
    return user
  }

//GET - api/users/:session_id - current user profile 
const currentUser = async (user_id) => {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
            SELECT *
            FROM users
            WHERE user_id = $1;
            `,
            [user_id]
        );
        return user;
    } catch (error) {
        throw error;
    }
};





module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser, getUserMatches, loginUser, currentUser, getUserByUsername, getUserMessages }