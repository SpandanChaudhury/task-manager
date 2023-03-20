const express = require('express');
const client = require('../connection.js');
const app = express();

app.post('/signup', (req, res) => {
    console.log(req.body);

    const query_check = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    const query_insert = `INSERT INTO users(firstname, lastname, email, password) VALUES('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.password}')`;
    console.log(query_insert);
    console.log(query_check);
    client.query(query_check, (error, result) => {
        if(error)
            console.log(error);
        else
        {
            if(result.rowCount > 0)
                // entry already exists.
                res.status(400).send({
                    error: 'email already in use'
                });
            else
            {
                client.query(query_insert, (error, result) => {
                    if(error)
                        // console.log('error in inserting - ' + error);
                        res.status(400).send({
                            error: 'could not insert kindly try again'
                        });
                    else
                    {
                        client.query(query_check, (error, result) => {
                            if(error)
                                console.log(error);
                            else
                            {
                                req.session.user = {
                                    id: result.rows[0].id,
                                    firstname: result.rows[0].firstname,
                                    lastname: result.rows[0].lastname,
                                    email: result.rows[0].email
                                };
                                console.log(req.session.user);
                                res.status(200).json({
                                    user: req.session.user
                                });
                            }
                        })
                        

                    }
                })
            }
        }
    })
    // res.send('received');
});
module.exports = app;
