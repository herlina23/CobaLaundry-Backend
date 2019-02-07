const Process = require("../models/Process");

module.exports = {
    index: (req,res) => {
        Process.find()
            .then(process => res.json(process))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Process.findById(req.params.id)
            .then(process => res.json(process))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Process.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.process},
            { new: true},
            )
            .then(process => res.json(process))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Process.create({...req.body.process})
            .then(process => res.json(process))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Process.findOneAndDelete({_id:req.params.id})
            .then(process => res.json(process))
            .catch(err => console.log(err))
    }
    
}