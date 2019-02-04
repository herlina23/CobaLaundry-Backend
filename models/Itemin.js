const mongoose = require('mongoose');

// Itemin Schema
const iteminSchema = mongoose.Schema({
    item_id:{
        type : String,
        required: true
    },
    item_name:{
        type : String,
        required: true
    },
    qty:{
        type : Number,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

const Itemin = module.exports = mongoose.model('Itemin', iteminSchema);