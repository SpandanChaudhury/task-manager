const express = require('express');
const client = require('../connection.js');
const app = express();

app.get('/edit/(:id)', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM tasklist WHERE taskid = ${id}`;

    client.query(query, (error, result) => {
        if(error)
            res.status(400).send(error);
        else
        {
            const data = {
                task: result.rows[0].task,
                created: result.rows[0].created,
                deadline: result.rows[0].deadline,
                status: result.rows[0].status
            };
            res.status(200).send(data);
        }
    })
});

app.post('/update/(:id)', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    // console.log(data);
    const query = `UPDATE tasklist SET task = '${data.task}', deadline = '${data.deadline}', status = '${data.status}' WHERE taskid = ${id}`;
    client.query(query, (error, result) => {
        if(error)
            res.status(400).send(error);
        else
            res.status(200).send('updated');
    })
})
module.exports = app;