import express from 'express';
import dotenv from 'dotenv';
import db from '../db/db_connections.js'
import OpenAI from 'openai';

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

//TODO: finalize prompt for plan generation
//POST /plan/generate/:id
router.post('/generate/:id', async (req, res) => {
    const { id } = req.params;
    const { method_choice, 
      donor_preference, 
      selected_fertility_issues, 
      timeline, 
      sex_at_birth, 
      known_fertility_issues, 
      using_donor, 
      partner_sex_at_birth } = req.body;
    
  
    try {
       // get user info from the database
       const userProfile = await db.query('SELECT * FROM users WHERE user_id = $1', [id]);
       if (userProfile.rows.length === 0) {
         return res.status(404).json({ error: 'User not found' });
       }
       const user = userProfile.rows[0];
  
      // AI inegration
    //   const completion = await openai.chat.completions.create({
    //     model: "gpt-4o",
    //     messages: [
    //         { role: "system", content: "You are a helpful assistant that helps families in the LGBQT+ community with family planning." },
    //         {
    //             role: "user",
    //             content: `
    //                  Provide a plan for a family with the following details: 
    //                 User's location: ${user.location || 'not specified'},
    //         Pronouns: ${user.pronouns || 'not specified'},
    //         Family structure: ${user.family_structure || 'not specified'},
    //         Sex assigned at birth: ${sex_at_birth || 'not specified'},
    //         Partner sex assigned at birth: ${partner_sex_at_birth || 'not specified'},
    //         Method choice: ${method_choice},
    //         Donor preference: ${donor_preference || 'not specified'},
    //         Using donor: ${using_donor || 'not specified'},
    //         Known fertility issues: ${known_fertility_issues || 'not specified'},
    //         Selected fertility issues: ${selected_fertility_issues || 'not specified'},
    //         Timeline: ${timeline || 'not specified'}`
    //         },
    //     ],
    // });
  
    const aiResponse = `
    Based on the provided details, here is your conception plan:

    Location: ${user.location || 'not specified'},
    Pronouns: ${user.pronouns || 'not specified'},
    Family structure: ${user.family_structure || 'not specified'},
    Method choice: ${method_choice},
    Donor preference: ${donor_preference || 'not specified'},
    Known fertility issues: ${known_fertility_issues || 'not specified'},
    Timeline: ${timeline || 'not specified'}.

    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.
    `;
    //const aiResponse = completion.choices[0].message.content;
    //TODO: Remove debug line once response prompt is finalized 
    //console.log('AI Response:', aiResponse);
  
      const result = await db.query(
       `INSERT INTO conception_plan 
      (user_id, method_choice, donor_preference, selected_fertility_issues, timeline, sex_at_birth, 
       known_fertility_issues, using_donor, partner_sex_at_birth, generated_plan)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [id, method_choice, donor_preference, selected_fertility_issues, timeline, sex_at_birth,
      known_fertility_issues, using_donor, partner_sex_at_birth, aiResponse]
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
  router.get('/userPlan/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query('SELECT * FROM conception_plan WHERE user_id = $1', [id]);
      if (result.rows.length > 0) {
        res.status(200).json({ plan: result.rows });
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

  export default router;