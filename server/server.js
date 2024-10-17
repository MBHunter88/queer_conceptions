import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import planRoutes from './routes/planRoutes.js';
//import oauthRoutes from './routes/oauth.js';

//use .env for variables
dotenv.config();

//initiallize express app
const app = express();
const PORT = process.env.PORT;

//config cors middleware
app.use(cors());
app.use(express.json()); 

// Use routes
app.use('/users', userRoutes);
app.use('/plans', planRoutes);

// TODO: Use the OAuth routes
//app.use('/oauth', oauthRoutes);

app.listen(PORT, () => console.log(`Server is runnning on port http://localhost:${PORT}`))


//for testing
export default app;
