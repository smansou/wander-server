
import {config} from "./config/config.js"
import { userRouter } from "./routes/user.routes.js";
import { mapRouter } from "./routes/map.routes.js";
import cors from "cors";
import mongoose from 'mongoose';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




mongoose
.connect(config.mongo.url, {useNewUrlParser: true})
.then(()=>{
    console.log("Connected to DB");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log(`Server is listening on port ${PORT}`);
})



app.use('/users', userRouter);
app.use('/maps', mapRouter);
app.get('/', (req, res, next)=>{
  res.send('Welcome');
});