const User = require("../models/User");

module.exports = {
    index: (req,res) => {
        User.find()
            .then(user => res.json(user))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.user},
            { new: true},
            )
            .then(user => res.json(user))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        // console.log(req.body.user)
        User.create({...req.body.user})
            .then(user => res.json(user))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        User.findOneAndDelete({_id:req.params.id})
            .then(user => res.json(user))
            .catch(err => console.log(err))
    }
    
}