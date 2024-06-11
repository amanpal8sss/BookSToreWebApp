
import express from 'express';
import Book from "../models/book.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {addBook,updateBook} from '../controller/book.controller.js';
import {authenticateToken,isAdmin} from '../routes/userAuth.js'
const router = express.Router();

//add-book --admin
router.post('/addBook',authenticateToken,isAdmin,addBook);

//update-book --admin
router.put('/updateBook/:Bookid',authenticateToken,isAdmin,updateBook);



export default router;