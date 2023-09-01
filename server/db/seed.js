//pull in connection to local database
const client = require('./client')

const { createUser, getAllUsers } = require('./helpers/users')
const { createSwipe, getAllSwipes } = require('./helpers/swipes')
const { createMessage, getAllMessages } = require('./helpers/messages')



const { users, swipes, messages } = require('./seedData')

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
            user_id SERIAL PRIMARY KEY,
            username varchar(32) UNIQUE NOT NULL,
            password varchar(32) NOT NULL,
            first_name varchar(32) NOT NULL,
            last_name varchar(32) NOT NULL,
            gender gender_enum NOT NULL,
            location varchar(32) NOT NULL,
            education varchar(255),
            work varchar(255),
            photos varchar(8000) NOT NULL,
            about_me varchar(500),
            song varchar(8000)
        );
        CREATE TABLE swipes (
            swipe_id SERIAL PRIMARY KEY,
            user1 INTEGER REFERENCES users(user_id),
            user2 INTEGER REFERENCES users(user_id),
            is_like BOOLEAN,
            is_pass BOOLEAN
        );
        CREATE TABLE messages (
            messages_id SERIAL PRIMARY KEY,
            sender_id INTEGER REFERENCES users(user_id),
            receiver_id INTEGER REFERENCES users(user_id),
            message_content varchar(500)
        );
    `)
    console.log("tables built!")
}

//inserting mock data from seedData.js

//create users
const createInitialUsers = async () => {
    try {
        //looping through the users array from seedData
        for (const user of users) {
            //insert each user into the table
            await createUser(user)
        }
        console.log("created users")
    } catch (error) {
        throw error
    }
}

//create swipes
const createInitialSwipes = async () => {
    try {
        for (const swipe of swipes) {
            await createSwipe(swipe)
        }
        console.log("created swipes")
    } catch (error) {
        throw error
    }
}

//create messages
const createInitialMessages = async () => {
    try {
        for (const message of messages) {
            await createMessage(message)
        }
        console.log("created messages")
    } catch (error) {
        throw error
    }
}


//call all functions and 'BUILD' database
const rebuildDb = async () => {
    try {
        //actually connect to local database
        client.connect()
        //run functions
        await dropTables()
        await createTables()

        //generate starting data
        console.log("starting to seed...")
        await createInitialUsers()
        await createInitialSwipes()
        await createInitialMessages()
        
    } catch (error) {
        console.error(error)
    } finally {
        //close connection
        client.end()
    }
}
    rebuildDb()