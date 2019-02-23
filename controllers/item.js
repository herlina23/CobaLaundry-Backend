const Item = require("../models/Item");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Item.find()
           .then(item => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir" ) {
                            res.json(item)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Item.findById(req.params.id)
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },

     search: (req,res) => {
        console.log(req.params.item_id)
            Item.find({item_id: req.params.item_id})
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Item.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.item},
            { new: true},
            )
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        // console.log(req.body.item)
        Item.create({...req.body.item})
            .then(item => res.json(item))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Item.findOneAndDelete({_id:req.params.id})
            .then(item => res.json(item))
            .catch(err => console.log(err))
    }
    
}