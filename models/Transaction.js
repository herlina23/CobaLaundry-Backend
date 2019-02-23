const mongoose = require('mongoose');

// Transaction Schema
const transactionSchema = mongoose.Schema({
    invoice:{
        type : String,
        unique : true,
        required: true
    },
    user_id:{
        type : String,
        required: true
    },
     member_id:{
        type : String,
        required: true
    },
    member_name:{
        type : String,
        required: true
    },
    date_in:{
        type : Date,
        default: Date.now
    },
    date_out:{
        type : Date,
        required: true
    },
    discount:{
        type : Number,
        required: true
    },
    grandtotal:{
        type : Number,
        required: true
    },
    paymentstatus:{
        type : String,
        required: true
    }
    
});

const Transaction = module.exports = mongoose.model('Transaction', transactionSchema);