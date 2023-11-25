'use strict';
import Task from '../models/Task.js';

const getAllTasks = async (req , res) =>{
    try {
        const tasks = await Task.find({});
        return res.status(200).json({tasks});
    }catch (err) {
        return res.status(500).json({msg: err})
    }
}

const createTasks = async (req , res) => {

    try {
        const task = await Task.create({
            name: req.body.name,
            completed: req.body.completed,
        })
        task.save();
        return res.status(200).send('ok');
    }catch (err){
        return res.status(500).json({msg: err});
    }

}

const getSingleTask = async (req , res) => {
    try{
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({msg : `there is no task with the id :  ${taskId}`});
        }else {
            return res.status(200).json({task});
        }
    }catch (err) {
        return res.status(500).json({msg : err})
    }
}

const updateTasks = async (req , res) => {
   const taskId = req.params.id;
   const task = await Task.findByIdAndUpdate({_id:taskId} ,req.body,{
       new : true,
       runValidators : true
   } );
    if(!task){
        return res.status(404).json({msg : `there is no task with the id :  ${taskId}`});
    }
   return res.status(200).json({task})
}

const deleteTasks = async (req , res) => {
    try{
        const taskId = req.params.id;
        const findTask = await Task.findOneAndDelete(taskId);
        if(!findTask){
            return res.status(404).json({msg : `there is no task with the id :  ${taskId}`});
        }else {
            return res.status(200).json({msg : `your task by id of : ${taskId} , have been just deleted`});
        }
    }catch (err){
        return res.status(500).json({msg : err})
    }
}

export default  {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTasks,
    deleteTasks
}