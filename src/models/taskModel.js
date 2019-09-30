import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema ({
    title : {
        type: String,
        required: 'A task must have a title'
    },
    description : {
        type: String
    },
    onComplete : {
        type: Boolean,
        default: false
    },
    dueDate : {
        type: Date,
    },
    created_at : {
        type: Date,
        default: Date.now
    },
    user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    

})