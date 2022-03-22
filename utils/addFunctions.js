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
  inquirer.prompt([
    {
        type: "text",
        name: 'roletitle',
        message: "What is the name of the role you wish to add?",
        validate: roleID => {
          if (roleID) {
            return true;
          } else {
            console.log("You need a name for the employee!");
            return false;
          }
        }
    },

    {
      type: "text",
      name: 'rolesalary',
      message: "What is this employee's salary?",
      validate: salaryID => {
        if (salaryID) {
          return true;
        } else {
          console.log("Please enter a salary!");
          return false;
        }
      }
  },
  {
    type: "text",
    name: 'roledepartment',
    message: "What department is this role assigned to?",
  
}

]).then((response) => {


    const roleTitle = response.roletitle
    const roleSalary = response.rolesalary
    const roleDept = response.roledepartment



    const sql = `INSERT INTO roles (role_title, role_salary, role_department) 
    VALUES ('${roleTitle}', '${roleSalary}', '${roleDept}')`;

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });

    

})
}

function addEmployee() {

}


module.exports = {
    addDepartment,
    addRole,
    addEmployee
}