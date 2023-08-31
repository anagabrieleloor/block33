//pull in connection to local database
const client = require('./client');

//dropping tables for cleanlieness
const dropTables = async () => {
    try {
        console.log("starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS messages;
        DROP TABLE IF EXISTS swipes;
        DROP TABLE IF EXISTS users;
        `)
        console.log("tables dropped")
    } catch (error) {
        console.log("error dropping tables")
        throw error
    }
}

//creating tables
const createTables = async () => {
    console.log("building tables...")
    await client.query(`
        CREATE TABLE users (
            "userId" SERIAL PRIMARY KEY,
            username varchar(32) UNIQUE NOT NULL,
            password varchar(32) NOT NULL,
            firstName varchar(32) NOT NULL,
            lastName carchar(32) NOT NULL,
            gender enum NOT NULL,
            location varchar(32) NOT NULL,
            education varchart(255),
            work varchart(255),
            photos varbinary(max) NOT NULL,
            aboutMe varchar(500),
            song varbinary(max)
        );
        CREATE TABLE swipes (
            "swipeId" SERIAL PRIMARY KEY,
            user1 INTEGER REFERENCES users(userId),
            user2 INTEGER REFERENCES users(userId),
            isLike BOOLEAN,
            isPass BOOLEAN
        );
        CREATE TABLE messages (
            "messagesId" SERIAL PRIMARY KEY,
            senderId REFERENCES swipes(user1),
            receiverId REFERENCES swipes(user2),
            message varchar(500)
        );
    `)
    console.log("tables built!")
}
  