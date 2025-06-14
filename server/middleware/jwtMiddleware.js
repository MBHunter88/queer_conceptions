import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Attach the decoded token payload to the request object
    next();  // Call the next middleware/route handler
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default verifyToken;
