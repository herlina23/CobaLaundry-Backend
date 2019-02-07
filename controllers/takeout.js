const Takeout = require("../models/Takeout");

module.exports = {
    index: (req,res) => {
        Takeout.find()
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Takeout.findById(req.params.id)
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Takeout.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.takeout},
            { new: true},
            )
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Takeout.create({...req.body.takeout})
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Takeout.findOneAndDelete({_id:req.params.id})
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    }
    
}