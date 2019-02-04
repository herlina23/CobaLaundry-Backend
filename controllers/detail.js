const Detail = require("../models/Detail");

module.exports = {
    index: (req,res) => {
        Detail.find()
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Detail.findById(req.params.id)
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
        Detail.find({...req.body.detail})
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Detail.findOneAndDelete({_id:req.params.id})
            .then(detail => res.json(detail))
            .catch(err => console.log(err))
    }
    
}