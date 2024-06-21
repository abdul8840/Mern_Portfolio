import Post from "../models/post.model";
import { errorHandler } from "../utils/error"

export const create = async (req, res, next) => {
  if (!req.body.isAdmin){
    return next(errorHandler(403, 'You are not allowed to create post'));
  }
  if(!req.body.title || !req.body.description || !req.body.content){
    return next(errorHandler(400, 'Please fill all fields'));
  }
  const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
  const newPost = new Post ({
    ...req.body, slug, userId: req.user.id,
  });
  try {
    const savePost = await newPost.save();
    res.status(201).json(savePost);
    } catch (error) {
      next(errorHandler(500, 'Failed to create post'));
    }
  
}