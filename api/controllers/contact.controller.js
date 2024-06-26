import { errorHandler } from "../utils/error.js";
import Contact from "../models/contact.model.js";

export const create = async (req, res, next) => {
  try {
    const { name, email, message, userId } = req.body;
    if(userId != req.user.id){
      next(errorHandler(403, 'You are not allowed to create review'));
    }
    const newContact = new Contact({
      name,
      email,
      message,
      userId,
    })
    await newContact.save();
    res.status(200).json(newContact);
  
  } catch (error) {
    next(error)
    
  }
};
