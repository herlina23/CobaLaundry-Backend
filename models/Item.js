const mongoose = require('mongoose');

// Item Schema
const itemSchema = mongoose.Schema({
    item_id:{
        type : String,
        unique : true,
        required: true
    },
    item_name:{
        type : String,
        required: true
    },
    unit:{
        type : String,
        required: true
    },
    stock:{
        type : Number,
        required: true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

const Item = module.exports = mongoose.model('Item', itemSchema);