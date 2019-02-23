const mongoose = require('mongoose');

// outcome Schema
const outcomeSchema = mongoose.Schema({
    outcome_id:{
        type : String,
        required: true
    },
    outcome_name:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        default: Date.now
    },
    user:{
        type : String,
        required: true
    },
    total:{
        type : Number,
        required: true
    }
   
});

const Outcome = module.exports = mongoose.model('Outcome', outcomeSchema);