import Book from "../models/book.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

//add book controller

export const addBook = async(req,res)=>{
  try {
    

    
    const newBook = new Book({
      url:req.body.url,
      title:req.body.title,
      author:req.body.author,
      price:req.body.price,
      desc:req.body.desc,
      language:req.body.language,
    });
    await newBook.save();
    res.status(200).json({message:"Book Added Successfully!"});
  } catch (error) {
    res.status(500).json({message:error.message});
    
  }
}