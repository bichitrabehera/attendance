import express from 'express';
import { loginUser } from '../models/UserModel.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);
    if (user) {
      res.status(200).json(user); // You might want to omit the password in a real app
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
