const Service = require("../models/Service");

module.exports = {
    index: (req,res) => {
        Service.find()
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Service.findById(req.params.id)
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Service.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.service},
            { new: true},
            )
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Service.find({...req.body.service})
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Service.findOneAndDelete({_id:req.params.id})
            .then(service => res.json(service))
            .catch(err => console.log(err))
    }
    
}