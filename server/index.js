require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const { SERVER_PORT, SERVER_SECRET, CONNECTION_STRING } = process.env
const app = express();

// Middleware
const checkForSession = require('./middlewares/checkSession');

//Controllers
const authController = require('./controllers/authController');

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is set');
})
app.use(express.json());
app.use(session({
    secret: SERVER_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
app.use(checkForSession);

// authorization controllers
app.post('/auth/login', authController.login);
app.post('/auth/register', authController.register);
app.post('/auth/logout', authController.logout);



app.listen(SERVER_PORT, () => console.log(`Listening on Port: ${SERVER_PORT}`));