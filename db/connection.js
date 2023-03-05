const mysql = require('mysql2');

// INSERT YOUR MYSQL CREDENTIALS HERE!

const db = mysql.createConnection({
    host:  "localhost",
    user: "",
    password: "",
    database: "myworkplace"
},
);

module.exports = db;

