//TODO: use 0auth to utilize google login for users
import express from 'express';
import dotenv from 'dotenv'; 
const router = express.Router()
import { OAuth2Client } from 'google-auth-library';
dotenv.config();

const getUserData = async (access_token) => {
const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);

const data = await response.json()
console.log('data', data)
} 

router.get('/', async (req, res) => {
    const code = req.query.code;
    console.log('code', code)
    try {
        const redirectUrl = 'http://localhost:8080/oauth';
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );
        const response = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(response.tokens);

        console.log("tokens acquired")
        const user = oAuth2Client.credentials
        console.log('user', user)
        const userData = await getUserData(user.access_token);
        res.json({ message: 'Authentication successful', user: userData });

    } catch(err) {
        console.log("error with google sign in")
    }
})

export default router