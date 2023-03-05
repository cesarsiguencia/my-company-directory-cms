const inquirer = require('inquirer');

const { getDepartments, getRoles, getEmployees } = require('../utils/getFunctions')

const { addDepartment, addRole, addEmployee } = require('../utils/addFunctions')

const { updateRole } = require('../utils/updateFunctions')


const cmsReturn = () => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'returnMenu',
      message: `Return to the main menu?`,
      default: 'true',

    },
  ])
    .then(({ returnMenu }) => {
      if (returnMenu === false) {
        console.log(
          `
Thank you for viewing!
Press "CTRL + C" to exit.
          `
        )
      } else {
        cmsPrompts()
      } 
    })
}



const cmsPrompts = () => {
  console.log(

    `Use CTNL + C anytime to exit
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
        return addDepartment()
      }

      if (answers === 'Add a role') {
        return addRole()
      }

      if (answers === 'Add an employee') {
        return addEmployee()
      }

      if (answers === 'Update an employee role') {
        return updateRole()
      }

      
      cmsReturn()
      console.log(``)

    })
}

cmsPrompts()

module.exports = { 
  cmsPrompts, 
  cmsReturn
}