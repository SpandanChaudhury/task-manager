const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'spandan',
    database: 'test'
});

client.connect(error => {
    if(error)
        console.log(error);
    else
        console.log('connected');
});

// client.query('select * from users limit 1', (error, result) => {
//     if(!error)
//         console.log(result.rows);
//     else
//         console.log(error);
// })
module.exports = client;
