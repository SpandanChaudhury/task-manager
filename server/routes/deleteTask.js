const express = require('express');
const client = require('../connection.js');
const app = express();

app.get('/delete/(:id)', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const query = `DELETE FROM tasklist WHERE taskid = ${id}`;
    client.query(query, (error, result) => {
        if(!error)
        {
            res.status(200).send('success');
        }
        else
            res.status(400).send(error);
    })
})
module.exports = app;