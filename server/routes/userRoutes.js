import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();
const router = express.Router();
const { Pool } = pkg;
const db = new Pool({
    connectionString: process.env.DATABASE_URI
});


//POST /login - verify user info from db
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      //TODO: If not using 0auth then hash password for direct db storage
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
router.post('/signup', async (req, res) => {
  const { email, password, location, pronouns, family_structure, has_children } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO users (email, password, location, pronouns, family_structure, has_children) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [email, password, location, pronouns, family_structure, has_children]
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
router.patch('/user/:id', async (req, res) => {
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

export default router