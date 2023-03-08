# My Company Directory CMS

This application is a Content Management System for a made up company, which is a database for all the employees of the company using MySQL and the Inquirer npm package. Employees are organized by name, role, salary, and other notable criteria. This app uses MySQL2 to connect to the database directly from the terminal.

Users will be able to view all departments, roles, employees and add departments, roles, and employees. They can also update an employees role.

This application can only be run locally. Please follow the directions below to run the app.

### Tables

1. Departments
2. Managers
3. Roles
4. Employees

### Installation

1. Git clone or download the application and load on VSCode
2. Run 'npm install' in the Command Line, make sure MySQL is installed.
    - If this is your first time installing MySQL, please navigate to their documentation for proper installation into you computer and credential creation.
3. Open application in VSCode and navigate to db/connection.js and include your MySQL user and password in the lines of code noted.
4. Go to the MySQL shell in the Command Line and type the following commands to download the original database from /db.
    - SOURCE db/db.sql
    - SOURCE db/schema.sql
    - SOURCE db/seeds.sql
5. Quit the MySQL shell and run 'node index' or 'npm start' depending on your run scripts.


### Screenshots
![Screenshot 1](screenshots/screenshot1.jpeg)

![Screenshot 2](screenshots/screenshot2.jpeg)

![Screenshot 3](screenshots/screenshot3.jpeg)

