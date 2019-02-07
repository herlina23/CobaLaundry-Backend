const Salary = require("../models/Salary");

module.exports = {
    index: (req,res) => {
        Salary.find()
            .then(salary => res.json(salary))
            .catch(err => console.log(err))
    },
    show: (req,res) => {
        Salary.findById(req.params.id)
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