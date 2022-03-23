// ADD FUNCTIONS

const path = require("path")

const inquirer = require("inquirer")

const db = require('../db/connection')
// const { getDepartments } = require("./getFunctions")

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

    const newDept = response.departmentname

    const sql = `INSERT INTO departments (dept_name) 
        VALUES ('${newDept}');`

    db.connect(function (err) {
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
          console.log("You need a name for the role!");
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
      message:

        `What department is this role assigned to? Use the following template to type in the number of the matching department name:
      1 = Human Resources
      2 = Finances
      3 = Operations and Management
      4 = Advertisement
      5 = Engineering
      6+ = Custom User Departments`

    }

  ]).then((response) => {

    const roleTitle = response.roletitle
    const roleSalary = response.rolesalary
    const roleDept = response.roledepartment

    const sql = `INSERT INTO roles (job_title, role_salary, role_department) 
    VALUES ('${roleTitle}', '${roleSalary}', '${roleDept}');`

    db.connect(function (err) {
      if (err) throw err;
      db.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });

  })
}

function addEmployee() {

  inquirer.prompt([
    {
      type: "text",
      name: 'first_name',
      message: "What is the first name of the employee?",
      validate: firstID => {
        if (firstID) {
          return true;
        } else {
          console.log("You need a name!");
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'last_name',
      message: "What is this employee's last name?",
      validate: lastID => {
        if (lastID) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'employee_role',
      message:

        `What role does this employee have? Use the following template to type in the number of the matching role name:
      1 = Manager
      2 = Engineer
      3 = Associate
      4 = Coordinator
      5 = Assistant
      6 = Director
      7+ = Custom User Roles`
      ,
    },

    {
      type: "text",
      name: 'employee_manager',
      message:

        `What role does this employee have? Use the following template to type in the number of the matching role name:
      1 = John Dryden
      2 = Alexander Pope
      3 = Lionel Johnson`
    }

  ]).then((response) => {

    const firstName = response.first_name
    const lastName = response.last_name
    const employeeRole = response.employee_role
    const employeeManager = response.employee_manager

    const sql = `INSERT INTO employees (first_name, last_name, employee_role, reporting_manager) 
    VALUES ('${firstName}', '${lastName}', '${employeeRole}','${employeeManager}');`

    db.connect(function (err) {
      if (err) throw err;
      db.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });

  })
}


module.exports = {
  // getDepartments,
  addDepartment,
  addRole,
  addEmployee
}