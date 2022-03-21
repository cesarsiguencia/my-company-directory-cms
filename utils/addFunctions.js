// ADD FUNCTIONS

const path = require("path")

const inquirer = require("inquirer")

const db = require('../db/connection')



function addDepartment() {
    inquirer.prompt([
        {
            type: "text",
            name: 'departmentname',
            message: "What is the name of the department you wish to add?",
            validate: departmentID => {
                console.log(departmentID, "Department ID is here")
              if (departmentID) {
                return true;
              } else {
                console.log('You need a department name!');
                return false;
              }
            }
        }
    ]).then((response) => {

        console.log(response.departmentname)

        const newDept = response.departmentname
        console.log(newDept)


        const sql = `INSERT INTO departments (dept_name) 
        VALUES ('${newDept}')`;
    
        db.connect(function(err) {
            if (err) throw err;
            db.query(sql, function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });

    })
  
} 


function addRole() {

}

function addEmployee() {

}


module.exports = {
    addDepartment,
    addRole,
    addEmployee
}