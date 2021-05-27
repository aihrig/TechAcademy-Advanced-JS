const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'db01.studio.radfx.com',
    user: 'dev',
    password: 'fooB@ar$',
    database: 'db_challenge'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    var sql = 'CREATE TABLE CUSTOMERS (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Table created!');
        con.end();
    });
});