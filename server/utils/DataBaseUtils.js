import mongoose from 'mongoose';

import config from '../../etc/config.json';

import '../models/Task.js';

const Task = mongoose.model('Task');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listTasks(id) {
    return Task.find();
}

export function createTask(data) {
    const task = new Task({
        index: data.index,
        title: data.title,
        comments: data.comments,
        priority: data.priority,
        color: data.color,
        status: data.status,
        deadline: new Date()
    });

    return task.save();
}

export function deleteTask(id) {
    return Task.findById(id).remove();
}
