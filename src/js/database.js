const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "mydb",
});

connection.connect((err) => {
  if (err) console.log("Not connected :(");
  else console.log("Connected successfully!");
});

module.exports = connection;
