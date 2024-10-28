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
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps families in the LGBTQ+ community with family planning. Provide all responses in a structured checklist format, similar to the example provided. Each step should include a title, a short timeline, and sub-bullets for actionable steps."
      },
      {
          role: "user",
          content: `
              Provide a family planning checklist with only the steps needed based on the following details:
              {
                  "timeline": "${timeline || 'not specified'}",
                  "location": "${user.location || 'not specified'}",
                  "pronouns": "${user.pronouns || 'not specified'}",
                  "partner's pronouns": "${user.partner_pronouns || 'not specified'}",
                  "current family structure": "${user.family_structure || 'not specified'}",
                  "sex at birth": "${sex_at_birth || 'not specified'}",
                  "partner's sex at birth": "${partner_sex_at_birth || 'not specified'}",
                  "conception method choice": "${method_choice || 'not specified'}",
                  "using donor?": "${using_donor || 'not specified'}",
                  "donor preference": "${donor_preference || 'not specified'}",
                  "fertility issues?": "${selected_fertility_issues || 'not specified'}",
                  "specified fertility issues": "${known_fertility_issues || 'not specified'}"
              }
              The response should be a list of actionable steps based on the timeline given and only based on the provided details. Include the legal process for the provided location, the steps involved in the provided method choice, and donor preference. Include additional steps needed if any fertility issues are provided. 

              Please provide the response in the following format:

              **Family Planning Checklist: [Method Choice] with [Donor Preference] ([Timeline])**

              1. **Step Title (Time Frame)**
                 - Sub-step 1
                 - Sub-step 2

              Example:
              **Family Planning Checklist: Reciprocal IVF with Anonymous Donor (6-Month Timeline)**
              
              1. **Research and Choose Fertility Clinic (0-1 Month)**
                 - Identify fertility clinics in [location] experienced in [method choice].
                 - Schedule consultations to evaluate options and comfort level.

              2. **Medical Evaluation (0-2 Months)**
                 - Complete fertility assessments, including bloodwork and pelvic exams.
                 - Disclose known fertility issues to a specialist for additional monitoring.

              3. **Legal Consultation (1-2 Months)**
                 - Consult an assisted reproduction lawyer in [location] to discuss parental rights.
                 - Draft and sign agreements for using a [donor preference].

              Respond strictly using the format above, with no introduction or conclusion.
          `
      },
      ],
  });
  
  // Example usage
  const response = completion.choices[0].message.content;
  console.log(response);
  

    // const aiResponse = `
    // Based on the provided details, here is your conception plan:

    // Location: ${user.location || 'not specified'},
    // Pronouns: ${user.pronouns || 'not specified'},
    // Family structure: ${user.family_structure || 'not specified'},
    // Method choice: ${method_choice},
    // Donor preference: ${donor_preference || 'not specified'},
    // Known fertility issues: ${known_fertility_issues || 'not specified'},
    // Timeline: ${timeline || 'not specified'}.

    // Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.
    // `;
    const aiResponse = completion.choices[0].message.content;
    //TODO: Remove debug line once response prompt is finalized 
    console.log('AI Response:', aiResponse);

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