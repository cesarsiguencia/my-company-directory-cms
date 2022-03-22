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
    const sql = `
    SELECT role_id, job_title, role_salary, dept_id, dept_name FROM roles
    LEFT JOIN departments ON roles.role_department = departments.dept_id;
    `

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.table(result);
        });
      });

}

function getEmployees(){
    const sql = `
    SELECT id, first_name, last_name, job_title, role_salary, dept_id, dept_name, manager_id,manager_name FROM employees
    LEFT JOIN roles ON employees.employee_role = roles.role_id
    LEFT JOIN departments ON roles.role_department = departments.dept_id
    LEFT JOIN managers ON employees.reporting_manager = managers.manager_id;
    `

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


