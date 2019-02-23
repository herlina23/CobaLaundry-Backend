const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    
    username:{
        type : String,
        required: true
    },
    role:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', userSchema);