const Process = require("../models/Process");

const User = require("../models/User")


module.exports = {
    index: (req,res) => {
        Process.find()
           .then(process => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir") {
                            res.json(process)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Process.findById(req.params.id)
            .then(process => res.json(process))
            .catch(err => console.log(err))
    },
    search: (req,res) => {
        console.log(req.params.invoice)
            Process.find({invoice: req.params.invoice})
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