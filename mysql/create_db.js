const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'db01.studio.radfx.com',
    user: 'dev',
    password: 'fooB@ar$'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    con.query('CREATE DATABASE db_challenge', function(err, result) {
        if (err) throw err;
        console.log('Database created');
    });
});
