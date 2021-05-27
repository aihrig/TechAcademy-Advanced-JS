var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'db01.studio.radfx.com',
    user: 'dev',
    password: 'fooB@ar$',
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});
