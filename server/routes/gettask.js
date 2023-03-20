const express = require('express');
const client = require('../connection.js');
const app = express();

app.post('/get-task', (req, res) => {
    // console.log(req.body);
    const id = req.body.id;
    const query = `SELECT * FROM tasklist WHERE userid = ${id} ORDER BY taskid`;
    client.query(query, (error, result) => {
        if(error)
            console.log(error);
        else
            res.send(result.rows);
    })


});
module.exports = app;