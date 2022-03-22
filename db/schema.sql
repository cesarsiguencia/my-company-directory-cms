DROP TABLE IF EXISTS departments; 
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;


CREATE TABLE departments (
  dept_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE managers (
  manager_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  manager_name VARCHAR(30) NOT NULL
);


CREATE TABLE roles (
  role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  role_salary VARCHAR(30) NOT NULL,
  role_department int,
  FOREIGN KEY (role_department) REFERENCES departments(dept_id)
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_role int,
  reporting_manager int,
  FOREIGN KEY (employee_role) REFERENCES roles(role_id),
  FOREIGN KEY (reporting_manager) REFERENCES managers(manager_id)

);



