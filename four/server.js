const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'WXY901221',
    database: 'user_table'
})

db.query('SELECT * FROM user', (err, data) => {
    if(err) {
        console.log(err)
    }else{
        console.log(data)
    }
})