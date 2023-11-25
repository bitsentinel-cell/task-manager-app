'use strict';
import mongoose, {Schema} from "mongoose";


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'must provide a name'],
        trim : true,
        maxLength : [10 , 'name cannot be bigger than 10 characters']
    },
    completed: {
        type : Boolean,
        default: false

    }


});

const Task = mongoose.model('Task' , TaskSchema)

export default Task;