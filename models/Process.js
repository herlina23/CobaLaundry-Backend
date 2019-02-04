const mongoose = require('mongoose');

// Process Schema
const processSchema = mongoose.Schema({
    invoice:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        default: Date.now
    },
    ongoing:{
        type : String,
        required: true
    }
});

const Process = module.exports = mongoose.model('Process', processSchema);