import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from '../models/user.model.js';

export const test = (req, res) => {
  res.json({ message: 'Hello from API!' });
}

export const updatUser = async (req, res, next) => {
  if(req.user.id !== req.params.userId){
    return next(errorHandler(403, 'You are not allowed to update this user!'))
  }
  if (req.body.password) {
    if(req.body.password.length <6){
      return next(errorHandler(400, 'Password must be at least 6 characters!'));
    }
    req.body.password = await bcryptjs.hash(req.body.password, 10);
  }

  if (req.body.username) {
    if(req.body.username.length < 6 || req.body.username.length > 15){
      return next(errorHandler(400, 'Username must be 7 to 20 characters'));
    }
    if(req.body.username.includes(' ')){
      return next(errorHandler(400, 'Username cannot contain spaces!'));
    }
    if(req.body.username !== req.body.username.toLowerCase()){
      return next(errorHandler(400, 'Username must be lowercase!'));
    }
    if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
      return next(errorHandler(400, 'Username must be alphanumeric!'));
    }
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.userId, {
        $set: {
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
        }
      }, 
      { new: true });
      const { password, ...rest } = updatUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error)
    }
  }
}