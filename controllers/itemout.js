const Itemout = require("../models/Itemout");
const User = require("../models/User")


module.exports = {
    index: (req,res) => {
        Itemout.find()
            .then(itemout => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir" ) {
                            res.json(itemout)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Itemout.findById(req.params.id)
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    search: (req,res) => {
        console.log(req.params.item_id)
            Itemout.find({item_id: req.params.item_id})
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Itemout.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.itemout},
            { new: true},
            )
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Itemout.create({...req.body.itemout})
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Itemout.findOneAndDelete({_id:req.params.id})
            .then(itemout => res.json(itemout))
            .catch(err => console.log(err))
    }
    
}