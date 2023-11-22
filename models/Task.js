import mongoose, {Schema} from "mongoose";


const TaskSchema = new mongoose.Schema({
    name: String,
    completed: String,


});

const Task = mongoose.model('Task' , TaskSchema)

export default Task;