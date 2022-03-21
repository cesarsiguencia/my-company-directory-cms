
// const fs = require('fs');
// const generateReadMe = require('./src/template.js')

const inquirer = require('inquirer');  // the package that allows us to use questionaire in the terminal

const { getDepartments, getRoles, getEmployees } = require('../utils/getFunctions')

const { addDepartment, addRole, addEmployee } = require('../utils/addFunctions')

const { updateRole } = require('../utils/updateFunctions')

console.log('the inquirer page is read')


const cmsPrompts = () => {
  console.log('inquirer should start')
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

    }

  ])
    .then((response) => {
      console.log(response.options)

      const answers = response.options



      if (answers === 'View all departments') {
        console.log('You have selected the view departments')
        getDepartments()
      }

      if (answers === 'View all roles') {
        console.log('You have selected the view all roles')
        getRoles()
      }

      if (answers === 'View all employees') {
        console.log('You have selected the view all employees')
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

    })

}

cmsPrompts();


module.exports = { cmsPrompts }