//The mongoose schema for the Grade model

import mongoose from 'mongoose';

// Schema for the Grade model
const gradeSchema = new mongoose.Schema({
    class_id: {
        type: Number,
        min: 0,
        max: 300,
        required: true
    },
    learner_id: {
        type: Number,
        required: true
    },
    scores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Score'
    }]
});

export default mongoose.model('Grade', gradeSchema)             // The Grade model created from the schema