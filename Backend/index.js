import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import  conn  from './conn/db.js';
import userRoute from './routes/user.routes.js';
import bookRoute from './routes/book.route.js';
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('Hello Mongoose');
})
//routes
app.use('/api/v1/',userRoute);
app.use('/ap1/v1/',bookRoute);

app.listen(PORT,()=>{
  console.log(`Server Started At ${PORT}`);
})

