//The mongoose schema for the Score model

import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    
    score: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Score'
    }
});

export default mongoose.model('Score', scoreSchema)