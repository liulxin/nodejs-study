(async () => {
  const mysql = require('mysql2/promise')

  //config
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'kkb'
  }

  //create the connection
  const connection = await mysql.createConnection(cfg)
  console.log(connection)
})()