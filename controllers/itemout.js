const Itemout = require("../models/Itemout");

module.exports = {
    index: (req,res) => {
        Itemout.find()
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Itemout.findById(req.params.id)
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },update: (req,res) => {
        Itemout.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.itemout},
            { new: true},
            )
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Itemout.find({...req.body.itemout})
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Itemout.findOneAndDelete({_id:req.params.id})
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    }
    
}