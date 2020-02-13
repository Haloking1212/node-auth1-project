const router = require('express').Router();
// const bcrypt = require('bcryptjs'); - used in auth-required-middleware.js
const Users = require('./users-model.js');
const authrequired = require('../auth/auth-required-middleware.js');

router.get('/', authrequired, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/users', authrequired, (req, res) => {
  Users.find()
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get users' })
  })
})

module.exports = router;
