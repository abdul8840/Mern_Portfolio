import { errorHandler } from "../utils/error.js";
import Skill from '../models/skill.model.js';

export const createskill = async (req,res,next) => {
  if(!req.user.isAdmin){
    return next(errorHandler(403, 'You are not allowed to create a post'))
  }
  if (!req.body.technology || !req.body.percent) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  try {
    const newSkill = new Skill({
      ...req.body,
      userId: req.user.id
    })
    const saveSkill = await newSkill.save();
    res.status(201).json(saveSkill);

  } catch (error) {
    next(error);
  }

}