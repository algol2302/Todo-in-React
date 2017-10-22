import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    index    : { type: Number, required: true },
    title    : { type: String, required: true },
    comments : { type: String },
    priority : { type: String, required: true },
    color    : { type: String },
    status   : { type: String, required: true },
    deadline : { type: Date, required: true }
});

const Task = mongoose.model('Task', TaskSchema);
