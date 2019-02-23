const Detail = require("../models/Detail");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Detail.find()
            .then(detail => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin") {
                            res.json(detail)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Detail.findById(req.params.id)
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.invoice)
            Detail.find({invoice: req.params.invoice})
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Detail.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.detail},
            { new: true},
            )
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Detail.create({...req.body.detail})
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Detail.findOneAndDelete({_id:req.params.id})
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    }
    
}