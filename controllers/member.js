const Member = require("../models/Member");

module.exports = {
    index: (req,res) => {
        Member.find()
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Member.findById(req.params.id)
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Member.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.member},
            { new: true},
            )
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Member.find({...req.body.member})
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Member.findOneAndDelete({_id:req.params.id})
            .then(member => res.json(member))
            .catch(err => console.log(err))
    }
    
}