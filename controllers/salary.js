const Salary = require("../models/Salary");
const User = require("../models/User")

module.exports = {
    index: (req,res) => {
        Salary.find()
            .then(salary => {
                User.findById(req.user.userId)
                    .then(user => {
                        if (user.role == "admin") {
                            res.json(salary)
                        } else {
                            res.sendStatus(403)
                        }
                    })
            })
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Salary.findById(req.params.id)
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    },
     search: (req,res) => {
        console.log(req.params.salary_id)
            Salary.find({salary_id: req.params.salary_id})
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    },
    update: (req,res) => {
        Salary.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body.salary},
            { new: true},
            )
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    },
    store: (req,res) => {
        Salary.create({...req.body.salary})
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    },
    destroy: (req,res) => {
        Salary.findOneAndDelete({_id:req.params.id})
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    }
    
}