const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'db01.studio.radfx.com',
    user: 'dev',
    password: 'fooB@ar$',
    database: 'db_challenge'
});

con.connect(function(err) {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log('Connected!');
    let sql = "INSERT INTO CUSTOMERS (name, address) VALUES ('Company Inc', 'Highway 68')";
    con.query(sql, function(err, result) {
        if (err) {
            console.log(`Error: ${err}`);
            con.end();
            return;
        }
        console.log(`Affected rows: ${result.affectedRows}`);
        con.query("SELECT * FROM CUSTOMERS", function(err, result, fields) {
            if (err) throw(err);
            console.log(result);
            con.end();
        });
    });
    
});
