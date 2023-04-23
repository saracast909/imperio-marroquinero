const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'imperio_marroquinero',
    port: 3306
});

db.connect(err=>{
    if (err) {
        console.log(err, 'dberr');
    }
    console.log('database conected...')
})

app.listen(3000, ()=>{
    console.log('server running');
});
