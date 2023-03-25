const express = require('express');
const client = require('../connection.js');

const app = express();
app.post('/admin-login', (req, res) => {
    // console.log(req.body);
    const query = `SELECT * FROM admin WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
    client.query(query, (error, result) => {
        if(error)
            console.log(error);
        else
        {
            // console.log(result.rows[0]);
            if(result.rowCount != 1)
            {
                console.log(result.rowCount);
                res.status(203).send({
                    error: 'more than one user'
                });
            }
            else
            {
               req.session.admin = {
                email: result.rows[0].email,
                firstname: result.rows[0].firstname,
                lastname: result.rows[0].lastname
               };
               console.log(req.session.admin);
               res.status(200).json({
                    admin: req.session.admin
               });
              
            }
        }
    })
});
module.exports = app;