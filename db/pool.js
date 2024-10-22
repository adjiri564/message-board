import pkg from 'pg';
import dotenv from 'dotenv';
const {Pool} = pkg
dotenv.config()

export default new Pool({
    host:process.env.DB_host ,
    user: process.env.DB_user,
    database: process.env.DB_database,
    password: process.env.DB_password,
    port: process.env.DB_port
})