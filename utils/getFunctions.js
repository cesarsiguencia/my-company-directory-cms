//  GET FUNCTIONS

const path = require("path")

const db = require('../db/connection')

console.log('reading GetFunctions page')

function getDepartments( req, res ){
    const sql = 'SELECT * FROM departments;'

        db.connect(function(err) {
            if (err) throw err;
            db.query(sql, function (err, result, fields) {
              if (err) throw err;
              console.table(result);
            });
          });
}


function getRoles(){
    const sql = 'SELECT * FROM roles;'

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.table(result);
        });
      });

}

function getEmployees(){
    const sql = 'SELECT * FROM employees;'

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.table(result);
        });
      });

   
}



module.exports = {
    getDepartments,
    getRoles,
    getEmployees
}


