import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
    class_id: {
        type: Number,
        min: 0,
        max: 300,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    },
    scores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Score'
    }]
});

export default mongoose.model('Grade', gradeSchema)