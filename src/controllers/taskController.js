import mongoose from 'mongoose';
import { TaskSchema } from '../models/taskModel';

const Task = mongoose.model('Task', TaskSchema);

export const addNewTask = (req, res) => {
    let newTassk = new Task(req.body);

    newTassk.save((err, task) => {
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

export const getTasks = ( req, res ) => {
    Task.find({}, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
};

export const getSpecificTask = ( req, res ) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
};

export const updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.taskId}, req.body, {new: true}, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
}

export const deleteTask = (req, res) => {
    Task.remove({ _id: req.params.taskId}, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted task'});
    })
}