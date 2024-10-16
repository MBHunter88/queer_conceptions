import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import OpenAI from "openai";
import pkg from 'pg';

//use .env for variables
dotenv.config();

//connect database
const { Pool } = pkg;
const db = new Pool({
    connectionString: process.env.DATABASE_URI
});

//initiallize express app
const app = express();

//Initialize OpenAI API with API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

const PORT = process.env.PORT;

//config cors middleware
app.use(cors());
app.use(express.json());

//test route for intial setup
//TODO: remove test route once actual routes are in place
app.get('/', (req, res) => {
    res.json("This is a test route, and it works!")
    console.log("What's Cracking World!")
})

//TODO: GET /user/:id - get user info from db

//TODO: POST /signup - add user to db

//TODO: POST /login - verify user in db

//TODO: PATCH /user - update user info

//TODO: POST /plan/generate/:id

//TODO: GET /plan/:id - get plan by user id



app.listen(PORT, () => console.log(`Server is runnning on port http://localhost:${PORT}`))


//for testing
export default app;
