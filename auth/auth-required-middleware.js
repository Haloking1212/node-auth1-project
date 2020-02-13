const users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');


module.exports = (req, res, next) => {
    // look for the credentials
    const { username, password } = req.headers

    if (!(username && password)) {
        res.status(401).json({ message: 'You Shall Not Pass!' });
        console.log(username,password,"testing")
    } else {
        users.findBy({ username })
            .first()
            .then(_user => {
                if (_user && bcrypt.compareSync(password, _user.password)) {
                    next()
                } else {
                    res.status(401).json({ messege: 'You Shall Not Pass!' })
                }
            })
            .catch((err) => { res.status(500).json({ messege: err }) })
    }
}