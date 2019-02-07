const Itemin = require("../models/Itemin");

module.exports = {
    index: (req,res) => {
        Itemin.find()
            .then(itemin => res.json(itemin))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Itemin.findById(req.params.id)
            .then(itemin => res.json(itemin))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Itemin.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.itemin},
            { new: true},
            )
            .then(itemin => res.json(itemin))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Itemin.create({...req.body.itemin})
            .then(itemin => res.json(itemin))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Itemin.findOneAndDelete({_id:req.params.id})
            .then(itemin => res.json(itemin))
            .catch(err => console.log(err))
    }
    
}