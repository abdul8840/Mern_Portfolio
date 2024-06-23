import { errorHandler } from "../utils/error.js";
import Service from '../models/service.model.js';

export const createservice = async (req, res, next) => {
  if(!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create service'));
  }

  if(!req.body.serviceTitle || !req.body.serviceContent){
    return next(errorHandler(400, 'Please fill all the fields'));
  }

  try {
    const newService = new Service({
      ...req.body,
      userId: req.user.id,
    })
    const saveService = await newService.save();
    res.status(201).json(saveService);
    
  } catch (error) {
    next(error);
  }
    
  
}