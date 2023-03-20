const express = require('express');
const client = require('../connection.js');
const session = require('express-session');
// const router = express.Router();

const app = express();
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const query =  `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    client.query(query, (error, result) => {
        if(!error)
        {
            if(result.rowCount == 0)
            {
                res.send('no user found');
            }
            else
            {
                // req.session.user = '';
                req.session.user = {
                    id: result.rows[0].id,
                    firstname: result.rows[0].firstname,
                    lastname: result.rows[0].lastname,
                    email: email
                };
                // console.log(req.session.user);
                console.log(req.session.user);
                res.status(200).json({
                    user: req.session.user
                });
            }
        }
        else
            console.log(error);
    });
});
module.exports = app;