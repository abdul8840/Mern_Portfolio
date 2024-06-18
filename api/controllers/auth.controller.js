import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password || name === '' || username === '' || email === '' || password === '') {
    next(errorHandler(400, "All fields are required"));
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
    next(error)
  }
}