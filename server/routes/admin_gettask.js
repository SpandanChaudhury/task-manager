const express = require('express');
const client = require('../connection.js');
const app = express();

app.post('/admin-getall', (req, res) => {
    const query = `SELECT * FROM tasklist t INNER JOIN users u ON t.userid = u.id ORDER BY t.taskid`;
    client.query(query, (error, result) => {
        if(error)
            console.log(error);
        else
        {
            res.status(200).send(result.rows);
        }
    })
})
module.exports = app;