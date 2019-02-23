const mongoose = require('mongoose');

// Salary Schema
const salarySchema = mongoose.Schema({
    salary_id:{
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

const Salary = module.exports = mongoose.model('Salary', salarySchema);