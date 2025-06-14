import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import openaiRoutes from './routes/openaiRoutes.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
//import oauthRoutes from './routes/oauth.js';

//use .env for variables
dotenv.config();

//initiallize express app
const app = express();
const PORT = process.env.PORT || 5001;

//config cors middleware
app.use(cors());
app.use(express.json()); 

// Use routes
app.use('/users', userRoutes);
app.use('/plans', openaiRoutes);

// TODO: Use the OAuth routes
//app.use('/oauth', oauthRoutes);

// PROD: Construct path to build folder in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// PROD: Serve static build files from React (Place this **after** initializing the app, **before** the wildcard catch-all)
app.use(express.static(path.join(__dirname, '../client/dist')));

// PROD: Ensure all routes are served the index.html file to allow React to manage routing (should be the last defined route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))

//for testing
export default app;
