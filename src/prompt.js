
// const fs = require('fs');
// const generateReadMe = require('./src/template.js')

const inquirer = require('inquirer');  // the package that allows us to use questionaire in the terminal

const { getDepartments, getRoles, getEmployees } = require('../utils/getFunctions')

const { addDepartment, addRole, addEmployee } = require('../utils/addFunctions')

const { updateRole } = require('../utils/updateFunctions')



const cmsPrompts = () => {
  console.log(
    
  `
  
  Use CTNL + C anytime to exit
  
  `)
  
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

    }

  ])
    .then((response) => {

      const answers = response.options

      if (answers === 'View all departments') {
        console.log('You have selected to view departments')
        getDepartments()
        
      }

      if (answers === 'View all roles') {
        console.log('You have selected to view all roles')
        getRoles()
      }

      if (answers === 'View all employees') {
        console.log('You have selected to view all employees')
        getEmployees()
      }

      if (answers === 'Add a department') {
        addDepartment()
      }

      if (answers === 'Add a role') {
        addRole()
      }

      if (answers === 'Add an employee') {
        addEmployee()
      }

      if (answers === 'Update an employee role') {
        updateRole()
      }
      console.log("Type 'CNTL' + 'C' to EXIT")
    })
    

}

cmsPrompts();

module.exports = { cmsPrompts }