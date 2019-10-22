;(async () => {
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

  connection.connect()

  // 创建表
  connection.query(
    `CREATE TABLE IF NOT EXISTS test(
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY(id)
  )`,
    (err, res) => {
      console.log(res)
    }
  )

  // 插入语句
  connection.query(`INSERT INTO test(message) VALUES(?)`,('learn mysql nodejs'), (err, res) => {
    console.log(res)
  })

  // 查询
  connection.query(`SELECT * FROM test`, (err, res) => {
    console.log(res)
  })

  // 更新
  connection.query(`UPDATE test SET message = ? WHERE id = 9`,'this is 9 mod', (err, res) => {
    console.log(res)
  })

  // 删除
  connection.query(`DELETE FROM test where id < 8`,(err, res) => {
    console.log(res)
  })
})()
