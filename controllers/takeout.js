const Takeout = require("../models/Takeout");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Takeout.find()
           .then(takeout => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir" ) {
                            res.json(takeout)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Takeout.findById(req.params.id)
            .then(takeout => res.json(takeout))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.invoice)
            Takeout.find({invoice: req.params.invoice})
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