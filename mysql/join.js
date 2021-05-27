const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'db01.studio.radfx.com',
    user: 'dev',
    password: 'fooB@ar$',
    database: 'sakila'
});

con.connect(function(err) {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log('Connected!');

    let sql = `select first_name, last_name, film.title from actor
                join film_actor on actor.actor_id = film_actor.actor_id
                join film on film.film_id = film_actor.film_id`;

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});