const mongoose = require('mongoose');

// Itemout Schema
const itemoutSchema = mongoose.Schema({
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
    create_date:{
        type : Date,
        default: Date.now
    }
});

const Itemout = module.exports = mongoose.model('Itemout', itemoutSchema);