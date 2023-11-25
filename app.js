'use strict';
import express from 'express';
import tasksRoutes from './routes/taskRoutes.js'
import dbconnection from "./db/dbconnection.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/v1/tasks', tasksRoutes);
app.use(notFound);
app.use(errorHandler);



const serverStart = async () =>{
    try {
       await dbconnection(process.env.MONGO_URI);
       app.listen(PORT, ()=>{
            console.log(`express server is up and running on port : ${PORT}`);
        })
    }catch (err){
     console.log(err)
    }
}
serverStart().then();
