const express = require('express');
// const router = express.Router();
const client = require('../connection.js');
const app = express();

app.post('/add-task', (req, res) => {
    console.log(req.body);
    
    // res.send('received');
    const query = `INSERT INTO tasklist(userid, task, created, deadline, status) VALUES(${req.body.uid}, '${req.body.task}', '${req.body.date}', '${req.body.deadline}', 'pending')`;

    client.query(query, (error, result) => {
        if(error)
            console.log(error);
        else
            // router.push('/home');
            // res.redirect('http://localhost:8081/home');
            // res.redirect('http://localhost:8081/home');
            res.send('inserted')
    })
})
module.exports = app;