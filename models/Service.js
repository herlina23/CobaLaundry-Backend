const mongoose = require('mongoose');

// Service Schema
const serviceSchema = mongoose.Schema({
    service_id:{
        type : String,
        unique : true,
        required: true
    },
    service_name:{
        type : String,
        required: true
    },
    days:{
        type : Number,
        required: true
    },
    unit:{
        type : String,
        required: true
    },
    tariff:{
        type : Number,
        required: true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

const Service = module.exports = mongoose.model('Service', serviceSchema);