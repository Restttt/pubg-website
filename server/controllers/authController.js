const users = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, email, password } = req.body;

        const checkEmailIsUsed = await db.getByEmail(email);
        const checkEmail = checkEmailIsUsed[0];

        if (checkEmail) {
            res.status(409).send('email is already in use');
        } else {

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            let date = new Date();
            const newUser = await db.registerUser(username, email, hash, date);

            delete newUser[0].hash;
            req.session.user = newUser[0];

            res.status(200).send(req.session.user);
        }
    },
    login: async (req, res) => {
        const db = req.app.get('db');

        const { email, password } = req.body;
        console.log(req.body);

        const checkEmailIsValid = await db.getByEmail(email);
        const user = checkEmailIsValid[0];

        if (!user) {
            res.status(401).send('email is invalid');
        } else {
            const isAuthenticated = bcrypt.compareSync(password, user.hash);
            if (!isAuthenticated) {
                res.status(403).send('incorrect password');
            } else {
                let date = new Date();

                const loggedIn = await db.lastLogin(date, user.email)
                
                delete loggedIn[0].hash;

                req.session.user = loggedIn[0];
                res.status(200).send(loggedIn[0]);
            };
        };
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('logged out');
    }
};