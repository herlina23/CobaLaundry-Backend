const mongoose = require('mongoose');

// Member Schema
const memberSchema = mongoose.Schema({
    member_id:{
        type : String,
        required: true
    },
    member_name:{
        type : String,
        required: true
    },
    phone:{
        type : String,
        required: true
    },
    address:{
        type : String,
        required: true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

const Member = module.exports = mongoose.model('Member', memberSchema);