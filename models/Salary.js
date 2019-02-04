const mongoose = require('mongoose');

// Salary Schema
const salarySchema = mongoose.Schema({
    item_id:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        default: Date.now
    },
    name:{
        type : String,
        required: true
    },
    total:{
        type : Number,
        required: true
    }
   
});

const Salary = module.exports = mongoose.model('Salary', salarySchema);