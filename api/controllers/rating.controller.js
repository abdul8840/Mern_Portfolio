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
  // try {
  //   const startIndex = parseInt(req.query.startIndex) || 0;
  //   const limit = parseInt(req.query.limit) || 9;
  //   const sortDirection = req.query.order === 'asc' ? 1 : -1;
  //   const ratings = await Rating.find({
  //     ...(req.query.userId && { userId: req.query.userId }),
  //     ...(req.query.rating && { rating: req.query.rating }),
  //     ...(req.query.service && { service: req.query.service }),
  //     ...(req.query.ratingId && { _id: req.query.ratingId }),
  //   })
  //     .sort({ updatedAt: sortDirection })
  //     .skip(startIndex)
  //     .limit(limit);

  //   const totalRating = await Rating.countDocuments();

  //   const now = new Date();

  //   const oneMonthAgo = new Date(
  //     now.getFullYear(),
  //     now.getMonth() - 1,
  //     now.getDate()
  //   );

  //   const lastMonthRating = await Rating.countDocuments({
  //     createdAt: { $gte: oneMonthAgo },
  //   });

  //   res.status(200).json({
  //     ratings,
  //     totalRating,
  //     lastMonthRating,
  //   });
  // } catch (error) {
  //   next(error);
  // }
};