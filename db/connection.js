const mysql = require('mysql2');

// INSERT YOUR MYSQL CREDENTIALS HERE!

const db = mysql.createConnection({
    host:  "localhost",
    user: "root",
    password: "holes360",
    database: "myworkplace"
},
);

module.exports = db;

