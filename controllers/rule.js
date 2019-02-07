const Rule = require("../models/Rule");

module.exports = {
    index: (req,res) => {
       Rule.find()
            .then(rule => res.json(rule))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
       Rule.findById(req.params.id)
            .then(rule => res.json(rule))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
       Rule.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.rule},
            { new: true},
            )
            .then(rule => res.json(rule))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
       Rule.create({...req.body.rule})
            .then(rule => res.json(rule))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
       Rule.findOneAndDelete({_id:req.params.id})
            .then(rule => res.json(rule))
            .catch(err => console.log(err))
    }
    
}