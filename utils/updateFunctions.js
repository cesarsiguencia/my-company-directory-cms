// UPDATE FUNCTION

const path = require("path")

const inquirer = require('inquirer')

const db = require('../db/connection')

function updateRole() {
    inquirer.prompt([
        {
            type: "text",
            name: 'update_employee',
            message:

                `Using the list below, type the ID of the employee whose role you wish to update:
        1 = James Fraser
        2 = Jack London
        3 = Robert Bruce
        4 = Peter Greenway
        5 = Derek Jarman
        6 = Paolo Pasolini
        7 = Heathcote Williams
        8 = Sandy Powell
        9 = Emil Zola
        10 = Sissy Coalpits
        11 = Antoinette Capet
        12 = Samuel Delany
        13 = Tony Duvert
        14 = Dennis Cooper
        15 = Monica Bellucci
        16 = Samuel Johnson
        17+ = Custom User Employees
          
          `

            ,
            validate: updateID => {
                if (updateID) {
                    return true;
                } else {
                    console.log('You need to select an employee!');
                    return false;
                }
            }
        },

        {
            type: "text",
            name: 'update_role',
            message:

                `Using the list below, type the ID of the role you wish to update your employee with:
            
            1 = Manager
            2 = Engineer
            3 = Associate
            4 = Coordinator
            5 = Assistant
            6 = Director
            7+ = Custom User Departments
            `

            ,
            validate: updateID => {
                if (updateID) {
                    return true;
                } else {
                    console.log('You need to select a role!');
                    return false;
                }
            }
        },


    ]).then((response) => {

        const employee = response.update_employee
        const role = response.update_role

        const sql = `UPDATE employees SET employee_role = ${role} WHERE id = ${employee};`

        db.connect(function (err) {
            if (err) throw err;
            db.query(sql, function (err, result, fields) {
                if (err) throw err;
                console.log(`
Successfully Updated!
Type 'CTNL + C' to quit
        `)
            });
        });
    })
}

module.exports = {
    updateRole
}