import pkg from 'pg';
import dotenv from 'dotenv';
const {Client} = pkg
dotenv.config()

// Database configuration
const client = new Client({
    user: process.env.DB_user,
    host: process.env.DB_host,
    database: process.env.DB_database,
    password: process.env.DB_password,
    port:process.env.DB_port, // Default PostgreSQL port
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;
// date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
const insertMessagesQuery = `
    INSERT INTO messages (username, text, date)
    VALUES 
        ('Amando', 'Hi there!', CURRENT_TIMESTAMP),
        ('Charles', 'Hello World!', CURRENT_TIMESTAMP);
`;

async function populateDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');

    // Create table
    await client.query(createTableQuery);
    console.log('Table "messages" created');

    // Insert sample data
        await client.query(insertMessagesQuery);
        console.log('Sample messages inserted');

    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await client.end();
        console.log('Database connection closed');
    }
}

populateDatabase();
