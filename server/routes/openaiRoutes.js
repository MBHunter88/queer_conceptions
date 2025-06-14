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

    // AI integration
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
          {
              role: "system",
              content: "You are a helpful assistant that helps families in the LGBTQ+ community with family planning. Provide all responses in a structured JSON format without using any code block markers or additional text., containing a family planning checklist."
          },
          {
              role: "user",
              content: `
                  Please provide a family planning checklist based on the following details in a structured JSON format:
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
  
                  The response should be in JSON format with the following structure:
  
                  {
                      "title": "Family Planning Checklist: [Method Choice] with [Donor Preference] ([Timeline])",
                      "timeline": "[Timeline]",
                      "steps": [
                          {
                              "title": "Step Title (e.g., Research and Choose Fertility Clinic)",
                              "timeframe": "Time Frame (e.g., 0-1 Month)",
                              "sub_steps": [
                                  "Sub-step 1",
                                  "Sub-step 2"
                              ]
                          },
                          {
                              "title": "Step Title (e.g., Medical Evaluation)",
                              "timeframe": "Time Frame (e.g., 0-2 Months)",
                              "sub_steps": [
                                  "Sub-step 1",
                                  "Sub-step 2"
                              ]
                          }
                          // More steps...
                      ]
                  }
  
                  Ensure that the response strictly follows the JSON format provided above without any code block markers, introduction or conclusion. Only provide the JSON response with no other text or characters.
              `
          },
      ],
  });
  
  // Example usage:
  try {
      const responseText = completion.choices[0].message.content;
      console.log(responseText)
      // Since it should be JSON, parse it
      const plan = JSON.parse(responseText);
      console.log(plan);
  } catch (error) {
      console.error("Error parsing JSON response:", error);
  }
  
  
    // MOCK response for testing and developement. 
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


//chatbot endpoint
router.post('/chatbot', async (req, res) => {
  try {
    const { userMessages } = req.body;

    // user messages must return as an array to track conversation history
    if (!userMessages || !Array.isArray(userMessages) || userMessages.length === 0) {
      return res.status(400).json({ error: 'Please provide a valid conversation history.' });
    }

    const systemMessage = {
      role: 'system',
      content: 'You are a helpful assistant specialized in supporting LGBTQ+ family planning and conception-related queries. Answer in a friendly, clear, and informative manner.',
    };

    //messages array with system message followed by user inputs and assistant responses
    const messages = [systemMessage, ...userMessages];

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
    });

    const assistantMessage = response.choices[0].message.content;

    res.status(200).json({ message: assistantMessage });
  } catch (error) {
    console.error('Error generating chatbot response:', error);
    res.status(500).json({
      error: 'Failed to get response from chatbot',
      message: error.message,
      operation: 'POST /chatbot/',
    });
  }
});

export default router;