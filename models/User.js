const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    user_id:{
        type : String,
        unique : true,
        required: true
    },
    user_name:{
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