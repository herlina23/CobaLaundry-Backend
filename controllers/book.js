const Book = require("../models/Book");

module.exports = {
    index: (req,res) => {
        Book.find()
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Book.findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Book.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.book},
            {new: true},
            )
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Book.find({...req.body.book})
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Book.findOneAndDelete({_id:req.params.id})
            .then(book => res.json(book))
            .catch(err => console.log(err))
    }
    
}