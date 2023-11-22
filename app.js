import express from 'express';
import tasksRoutes from './routes/tasks.js'
import dbconnection from "./db/dbconnection.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/v1/tasks', tasksRoutes);




const serverStart = async () =>{
    try {
       await dbconnection(process.env.MONGO_URI);
       app.listen(port, ()=>{
            console.log(`express server is up and running on port : ${port}`);
        })
    }catch (err){
     console.log(err)
    }

}

serverStart().then();
