// const pool = require('./pool.js')
import pool from "./pool.js";

async function getAllUsernames() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertUsername(username, text) {
    await pool.query("INSERT INTO messages(username, text) VALUES ($1, $2)", [username, text]);
    // await pool.query("INSERT INTO messages (text) VALUES ($1)", [text])
}
async function deleteMessage(username, text) {
    await pool.query("DELETE FROM messages WHERE username = $1 AND text = $2", [username, text]);
}

export default{
    getAllUsernames,
    insertUsername,
    deleteMessage
}