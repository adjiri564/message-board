import dotenv from 'dotenv';
import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import router from './routes/homeRoute.js';
import newRouter from './routes/newRoute.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

//views
app.set('views',(__dirname, 'views'));
app.set('view engine', 'ejs');

//assets
const assetsPath = (__dirname, 'public');
app.use(express.static(assetsPath));

// Middleware to parse URL-encoded bodies (form submissions)  
app.use(express.urlencoded({ extended: true }));  
app.use(express.json())



app.use('/', router)
app.use('/new', newRouter)



const port = process.env.PORT;

app.listen(port, ()=> {console.log(`Port running at ${port}`)})