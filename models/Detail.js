const mongoose = require('mongoose');

// Detail Schema
const detailSchema = mongoose.Schema({
    invoice:{
        type : String,
        required: true
    },
    service_id:{
        type : String,
        required: true
    },
    service_name:{
        type : String,
        required: true
    },

    qty:{
        type : Number,
        required: true
    }
});

const Detail = module.exports = mongoose.model('Detail', detailSchema);