const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
// const client = require('./connection.js');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(cors());
app.use(express.json());
app.use(require('./routes/login.js'));
app.use(require('./routes/addtask.js'));
app.use(require('./routes/gettask.js'));
app.use(require('./routes/signup.js'));
app.use(require('./routes/adminlogin.js'));
app.use(require('./routes/admin_gettask.js'));
app.use(require('./routes/deleteTask.js'));
app.use(require('./routes/editTask.js'));
app.listen(3300, () => {
    console.log('server is running at http://localhost/3300');
});