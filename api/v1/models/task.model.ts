import mongoose from 'mongoose';
import {Schema} from 'mongoose'

export interface ITask {
    title: string,
    status: string,
    content: string,
    createdBy: string,
    listUser: string[],
    taskParentId?: string,
    timeStart?: Date,
    timeEnd?: Date,
    deleted: boolean,
}

const taskSchema = new Schema<ITask>({
    title: String,
    status: String,
    content: String,
    createdBy: String,
    listUser: [String],
    taskParentId: String,
    timeStart: Date,
    timeEnd: Date,
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const Task = mongoose.model<ITask>('Task', taskSchema, "tasks");
export default Task;
