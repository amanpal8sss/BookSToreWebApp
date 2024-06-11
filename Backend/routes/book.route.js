
import express from 'express';
import Book from "../models/book.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {addBook} from '../controller/book.controller.js';
import {authenticateToken,isAdmin} from '../routes/userAuth.js'
const router = express.Router();

//add-book --admin

router.post('/addBook',authenticateToken,isAdmin,addBook);

export default router;