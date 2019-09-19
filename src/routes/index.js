import { addNewTask, getTasks, getSpecificTask, updateTask, deleteTask } from '../controllers/taskController';

const routes = (app) => {
    app.route('/tasks')
    .get(getTasks)

    .post(addNewTask);

    app.route('/task/:taskId')

    .get(getSpecificTask)
    .put(updateTask)

    .delete(deleteTask);
}

export default routes;