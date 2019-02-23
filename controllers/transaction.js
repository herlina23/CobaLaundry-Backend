const Transaction = require("../models/Transaction");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Transaction.find()
           .then(transaction => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir" ) {
                            res.json(transaction)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Transaction.findById(req.params.id)
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.invoice)
            Transaction.find({invoice: req.params.invoice})
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
        Transaction.create({...req.body.transaction})
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Transaction.findOneAndDelete({_id:req.params.id})
            .then(transaction => res.json(transaction))
            .catch(err => console.log(err))
    }
    
}