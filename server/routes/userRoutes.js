import express from 'express';
import dotenv from 'dotenv';
import db from '../db/db_connections.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import verifyToken from '../middleware/jwtMiddleware.js'

dotenv.config();
const router = express.Router();


const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

//POST /login - verify user info from db
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    //search user by email
    const result = await db.query(`SELECT users.*, conception_plan.plan_id,  
              conception_plan.donor_preference, conception_plan.known_fertility_issues, 
              conception_plan.timeline, conception_plan.generated_plan, conception_plan.status, 
              conception_plan.date_created, conception_plan.sex_at_birth, conception_plan.partner_sex_at_birth
       FROM users
       LEFT JOIN conception_plan ON users.user_id = conception_plan.user_id
       WHERE users.email = $1`, [email]);

    if (result.rows.length === 0) {
      // User not found
      return res.status(401).json({ message: 'Invalid email' });
    }

    const user = result.rows[0];

    //Compare input password with hashed password in the db
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

 //user authenticated successfully - create token
    const token = jwt.sign(
      { userId: user.user_id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '1h' } 
    );
    const userResponse = {
      id: user.user_id,
      email: user.email,
      name: user.name,
      location: user.location,
      pronouns: user.pronouns,
      age: user.age,
      family_structure: user.family_structure,
      has_partner: user.has_partner,
      partner_name: user.partner_name,
      partner_pronouns: user.partner_pronouns,
      partner_age: user.partner_age,
      plan: user.plan_id
        ? {
            plan_id: user.plan_id,
            method_choice: user.method_choice,
            donor_preference: user.donor_preference,
            known_fertility_issues: user.known_fertility_issues,
            timeline: user.timeline,
            generated_plan: user.generated_plan,
            status: user.status,
            date_created: user.date_created,
            sex_at_birth: user.sex_at_birth,
            partner_sex_at_birth: user.partner_sex_at_birth,
          }
        : null,
    };

    res.status(200).json({
      message: 'Login successful',
      token,
      user: userResponse
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({
      error: 'Login unsuccessful',
      message: error.message,
      operation: 'POST /login'
    });
  }
});

//POST /signup - add user to db with hashed password
router.post('/signup', async (req, res) => {
  const { 
    email,
    password,
    name,
    location,
    pronouns,
    age,
    family_structure,
    has_partner,
    partner_name,
    partner_pronouns,
    partner_age
  
  } = req.body;

  try {
    //hash the user password before storing in db
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    //Insert new user with hashed password
    const result = await db.query(
      'INSERT INTO users (email, password, name, location, pronouns, age, family_structure, has_partner, partner_name, partner_pronouns, partner_age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [email, hashedPassword, name, location, pronouns, age, family_structure, has_partner, partner_name, partner_pronouns, partner_age]
    );

    res.status(201).json({ message: 'User created successfully', user: { email: result.rows[0].email } });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({
      error: 'Signup unsuccessful',
      message: error.message,
      operation: 'POST /signup'
    });
  }
});


//PATCH /user/:id - update user info
router.patch('/user/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { email, location, pronouns, family_structure } = req.body;
  try {
    //make sure user can only edit own profile
    if (req.user.userId !== parseInt(id)) {
      return res.status(403).json({message: "Unauthorized to update"})
    }
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

export default router;
