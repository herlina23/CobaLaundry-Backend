const Service = require("../models/Service");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Service.find()
            .then(service => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin") {
                            res.json(service)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Service.findById(req.params.id)
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.service_id)
            Service.find({service_id: req.params.service_id})
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Service.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.service},
            { new: true},
            )
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Service.create({...req.body.service})
            .then(service => res.json(service))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Service.findOneAndDelete({_id:req.params.id})
            .then(service => res.json(service))
            .catch(err => console.log(err))
    }
    
}