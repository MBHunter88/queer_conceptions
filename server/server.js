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

//POST /login - verify user info from db
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (result.rows.length > 0 && result.rows[0].password === password) {
        res.status(200).json({ message: 'Login successful', user: result.rows[0] });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({
          error: 'Login unsucessful',
          message: error.message,
          operation: 'POST /login'
      });
  }
  });

//POST /signup - add user to db
app.post('/signup', async (req, res) => {
  const { email, password, location, pronouns, family_structure } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO users (email, password, location, pronouns, family_structure) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, password, location, pronouns, family_structure]
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({
        error: 'Signup unsucessful',
        message: error.message,
        operation: 'POST /signup'
    });
}
});

//PATCH /user/:id - update user info
app.patch('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { email, location, pronouns, family_structure } = req.body;
  try {
    const result = await db.query(
      'UPDATE users SET email = $1, location = $2, pronouns = $3, family_structure = $4 WHERE user_id = $5 RETURNING *',
      [email, location, pronouns, family_structure, id]
    );
    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({
        error: 'User update unsucessful',
        message: error.message,
        operation: 'PATCH /user/:id'
    });
}
});

//TODO: POST /plan/generate/:id
app.post('/plan/generate/:id', async (req, res) => {
  const { id } = req.params;
  const { method_choice, donor_preference, known_fertility_issues, timeline } = req.body;
  try {
     // get user info from the database
     const userProfile = await db.query('SELECT * FROM users WHERE user_id = $1', [id]);
     if (userProfile.rows.length === 0) {
       return res.status(404).json({ error: 'User not found' });
     }
     const user = userProfile.rows[0];

    // AI inegration
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
          { role: "system", content: "You are a helpful assistant that helps families in the LGBQT+ community with family planning." },
          {
              role: "user",
              content: 
              `Provide a plan for a family with the following details: 
                    User's location: ${user.location}, 
                    Pronouns: ${user.pronouns}, 
                    Family structure: ${user.family_structure}, 
                    Method choice: ${method_choice}, 
                    Donor preference: ${donor_preference}, 
                    Known fertility issues: ${known_fertility_issues}, 
                    Timeline: ${timeline}.`,
          },
      ],
  });

  const aiResponse = completion.choices[0].message.content;
  console.log('AI Response:', aiResponse);

    const result = await db.query(
      'INSERT INTO conception_plan (user_id, method_choice, donor_preference, known_fertility_issues, timeline, generated_plan ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id, method_choice, donor_preference, known_fertility_issues, timeline, aiResponse ]
    );
    res.status(201).json({ plan: result.rows[0] });
  } catch (error) {
    res.status(500).json({
        error: 'Plan generation unsucessful',
        message: error.message,
        operation: 'POST /plan/generate/:id'
    });
}
});

//GET /plan/:id - get plan by user id
app.get('/plan/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM plans WHERE user_id = $1', [id]);
    if (result.rows.length > 0) {
      res.status(200).json({ plan: result.rows[0] });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({
        error: 'Server error fetch user plan',
        message: error.message,
        operation: 'GET /plan/:id'
    });
}
});



app.listen(PORT, () => console.log(`Server is runnning on port http://localhost:${PORT}`))


//for testing
export default app;
