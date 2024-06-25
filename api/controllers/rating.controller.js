import { errorHandler } from "../utils/error.js"
import Rating from '../models/rating.model.js';

export const createrating = async (req, res, next) => {
  try {
    const { rating, review, userId } = req.body;
    // const userId = req.user.id;
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

export const getrating = async (req, res, next) => {
  try {
    const ratings = await Rating.find().sort({
      createdAt: -1
    });
    res.status(200).json(ratings);
    
    
  } catch (error) {
    next(error)
    
  }
};

export const deleterating = async (req, res, next) => {
  try {
    const rating = await Rating.findById(req.params.ratingId);
    if (!rating) {
      return next(errorHandler(404, 'Rating not found'));
    }
    if(rating.userId != req.user.id && !req.user.isAdmin === false){
      next(errorHandler(403, 'You are not allowed to delete this review'));
    }
    await Rating.findByIdAndDelete(req.params.ratingId);
    res.status(200).json( 'Rating deleted successfully' );
    
  } catch (error) {
    next(error)
  }
}