import 'dotenv/config' 
// const env_name = `.env.${process.env.MODE}` || `.env`;
// console.log('Env file path - ../', env_name)

import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();


const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.static("public"));
app.use(cookieParser())

import UserRouter from './routes/user.routes.js';
app.get('/', (req, res) => {
    res.status(200)
    // .json({
    //     message: "Welcome to the API",
    //     version: "1.0.0",
    // })
    .send(        
        '<h1 style={}>Welcome to Server</h1>'
    );
})
app.use('/api/v1/user', UserRouter);
export { app }