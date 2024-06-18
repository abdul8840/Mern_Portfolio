import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password || name === '' || username === '' || email === '' || password === '') {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    name,
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("Signup Successfull ");
  } catch (error) {
    res.status(500).json(error.message);
  }
}