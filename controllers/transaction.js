const Transaction = require("../models/Transaction");

module.exports = {
    index: (req,res) => {
        Transaction.find()
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Transaction.findById(req.params.id)
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Transaction.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.transaction},
            { new: true},
            )
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Transaction.find({...req.body.transaction})
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Transaction.findOneAndDelete({_id:req.params.id})
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    }
    
}