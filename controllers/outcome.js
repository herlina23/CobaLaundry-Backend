const Outcome = require("../models/Outcome");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Outcome.find()
            .then(outcome => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin") {
                            res.json(outcome)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Outcome.findById(req.params.id)
            .then(outcome => res.json(outcome))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.outcome_id)
            Outcome.find({outcome_id: req.params.outcome_id})
            .then(outcome => res.json(outcome))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Outcome.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.outcome},
            { new: true},
            )
            .then(outcome => res.json(outcome))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Outcome.create({...req.body.outcome})
            .then(outcome => res.json(outcome))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Outcome.findOneAndDelete({_id:req.params.id})
            .then(outcome => res.json(outcome))
            .catch(err => console.log(err))
    }
    
}