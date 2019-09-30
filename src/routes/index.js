import { addNewTask, getTasks, getSpecificTask, updateTask, deleteTask } from '../controllers/taskController';
import { createUser, userLogin} from '../controllers/userController';

const routes = (app) => {

    // Task Routes
    app.route('/tasks')
    .get(getTasks)

    .post(addNewTask);

    app.route('/task/:taskId')

    .get(getSpecificTask)
    .put(updateTask)

    .delete(deleteTask);

    // User Routes
    app.route('/user/create')
    .post(createUser);

    app.route('/user/login')
    .post(userLogin);

}

export default routes;