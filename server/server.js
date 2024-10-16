import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import OpenAI from "openai";
import pkg from 'pg';
import oauthRoutes from './routes/oauth.js';

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

// TODO: Use the OAuth routes
//app.use('/oauth', oauthRoutes);

//TODO: POST /login - verify user info from db
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (result.rows.length > 0 && result.rows[0].password === password) {
        res.status(200).json({ message: 'Login successful', user: result.rows[0] });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (err) {
      console.error('Error during login', err);
      res.status(500).send('Server error during login');
    }
  });

//TODO: POST /signup - add user to db
app.post('/signup', async (req, res) => {
  const { email, password, location, pronouns, family_structure } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO users (email, password, location, pronouns, family_structure) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, password, location, pronouns, family_structure]
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    console.error('Error during signup', err);
    res.status(500).send('Server error during signup');
  }
});

//TODO: PATCH /user/:id - update user info
app.patch('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { email, location, pronouns, family_structure } = req.body;
  try {
    const result = await db.query(
      'UPDATE users SET email = $1, location = $2, pronouns = $3, family_structure = $4 WHERE user_id = $5 RETURNING *',
      [email, location, pronouns, family_structure, id]
    );
    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    console.error('Error during user update', err);
    res.status(500).send('Server error during user update');
  }
});

//TODO: POST /plan/generate/:id

//TODO: GET /plan/:id - get plan by user id
app.get('/plan/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM plans WHERE user_id = $1', [id]);
    if (result.rows.length > 0) {
      res.status(200).json({ plan: result.rows[0] });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (err) {
    console.error('Error fetching plan', err);
    res.status(500).send('Server error during fetching plan');
  }
});



app.listen(PORT, () => console.log(`Server is runnning on port http://localhost:${PORT}`))


//for testing
export default app;
