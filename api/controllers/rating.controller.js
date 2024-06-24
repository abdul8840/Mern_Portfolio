import { errorHandler } from "../utils/error.js"
import Rating from '../models/rating.model.js';

export const createrating = async (req, res, next) => {
  try {
    const { rating, review } = req.body;
    const userId = req.user.id;
    if(userId != req.user.id){
      next(errorHandler(403, 'You are not allowed to create review'));
    }
    const newRating = new Rating({
      rating,
      review,
      userId,
    })
    await newRating.save();
    res.status(200).json(newRating);
  
  } catch (error) {
    next(error)
    
  }
}