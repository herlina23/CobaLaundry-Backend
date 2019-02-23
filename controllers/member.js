const Member = require("../models/Member");

const User = require("../models/User")


module.exports = {
    index: (req,res) => {
        Member.find()
            .then(member => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin" || user.role == "kasir" ) {
                            res.json(member)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        // Member.find({member_id: req.params})
        Member.findById(req.params.id)
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },

    // ini ditambahkan kalo

    //Member.find({member_id(sama kyk parameter yang mau di cari di model): req.params.member_id})
    search: (req,res) => {
        console.log(req.params.member_id)
            Member.find({member_id: req.params.member_id})
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
        Member.create({...req.body.member})
            .then(member => res.json(member))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Member.findOneAndDelete({_id:req.params.id})
            .then(member => res.json(member))
            .catch(err => console.log(err))
    }
    
}