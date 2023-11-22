import Task from '../models/Task.js';

const getAllTasks = (req , res) =>{
     res.send('get all the tasks!!')
}

const createTasks = async (req , res) => {
    const task = await Task.create({
        name : req.body.name,
        completed : req.body.completed,
    })
    task.save();
    return res.send('ok')
}

const getSingleTasks = (req , res) => {
    res.send('get single task')
}

const updateTasks = (req , res) => {
    res.send('task updated')
}

const deleteTasks = (req , res) => {
    res.send('task deleted')
}

export default  {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}