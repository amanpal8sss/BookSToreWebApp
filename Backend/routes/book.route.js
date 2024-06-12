
import express from 'express';
import Book from "../models/book.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {addBook,getBook,getBooks,updateBook,deleteBook} from '../controller/book.controller.js';
import {authenticateToken,isAdmin} from '../routes/userAuth.js'
const router = express.Router();

//add-book --admin
router.post('/addBook',authenticateToken,isAdmin,addBook);

//get-books --admin
router.get('/getBook/:id',authenticateToken,isAdmin,getBook);

//get-book --admin
router.get('/getBooks',authenticateToken,isAdmin,getBooks);

//update-book --admin
router.put('/updateBook/:Bookid',authenticateToken,isAdmin,updateBook);

//delete-book --admin
router.delete('/deleteBook/:Bookid',authenticateToken,isAdmin,deleteBook);



export default router;