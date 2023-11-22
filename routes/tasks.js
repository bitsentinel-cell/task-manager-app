import express from 'express';
import TasksController from '../controllers/TasksController.js'
const router = express.Router();

router.get('/' , TasksController.getAllTasks);
router.post('/' , TasksController.createTasks);
router.get('/:id' , TasksController.getAllTasks);
router.patch('/:id' , TasksController.updateTasks);
router.delete('/:id' , TasksController.deleteTasks);



export default router;


