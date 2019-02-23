const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  index: (req, res) => {
    User.find()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  },
  show: (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => console.log(err));
  },
  authenticate: (req, res) => {
    const { username, password } = req.body.user;
    User.findOne({ username })
      .then(user => {
        if (!user) {
          res.sendStatus(403);
        }
        bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              userId = user._id;
              jwt.sign(
                { userId },
                `${process.env.JWT_SECRET}`,
                (err, token) => {
                  if (err) {
                    res.sendStatus(403);
                  }
                  res.json({ token });
                }
              );
            } else {
              res.sendStatus(403);
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
  //user.find({user_id(sama kyk parameter yang mau di cari di model): req.params.user_id})
  search: (req, res) => {
    console.log(req.params.user_id);
    User.find({ user_id: req.params.user_id })
      .then(user => res.json(user))
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body.user },
      { new: true }
    )
      .then(user => res.json(user))
      .catch(err => console.log(err));
  },
  store: (req, res) => {
    let newUser = req.body.user;
    bcrypt.genSalt(10, function(err, salt) {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) throw err;
        newUser.password = hash;
        User.create(newUser)
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  },
  destroy: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
      .then(user => res.json(user))
      .catch(err => console.log(err));
  }
};
