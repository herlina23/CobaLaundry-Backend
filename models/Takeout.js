const mongoose = require('mongoose');

// Takeout Schema
const takeoutSchema = mongoose.Schema({
    invoice:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        default: Date.now
    },
    recipient:{
        type : String,
        required: true
    },
    status:{
        type : String,
        required: true
    }
});

const Takeout = module.exports = mongoose.model('Takeout', takeoutSchema);