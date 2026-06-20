import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },

    subjectCode: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    },

    credits: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;