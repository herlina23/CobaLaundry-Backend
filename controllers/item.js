const Item = require("../models/Item");

module.exports = {
    index: (req,res) => {
        Item.find()
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Item.findById(req.params.id)
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Item.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.item},
            { new: true},
            )
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Item.find({...req.body.item})
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Item.findOneAndDelete({_id:req.params.id})
            .then(item => res.json(item))
            .catch(err => console.log(err))
    }
    
}