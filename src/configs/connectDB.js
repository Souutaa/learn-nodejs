import mysql from "mysql2/promise";

// // create the connection to database

//console.log("Creating connection pool...");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
  // password: 'password'
});

export default connection;
